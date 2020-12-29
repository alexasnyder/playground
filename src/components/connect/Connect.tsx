import { Button, createStyles, TextField, Theme, Typography, withStyles } from "@material-ui/core";
import React from "react";

interface ConnectForm {
    firstName?: string;
    lastName?: string;
    email?: string;
    message?: string;
}
interface ConnectState {
    form: ConnectForm;
    apiResponse?: string;
}

const styles = (theme: Theme) => 
    createStyles({
        root: {
            margin: '0 auto',
            width: '25%',
            '& .MuiTextField-root': {
                display: 'flex',
                margin: theme.spacing(2),
            }
        },
    });

class Connect extends React.Component<any, ConnectState> {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                firstName: '',
                lastName: '',
                email: '',
                message: ''
            }
        };

        this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
        this.handleSendMessage = this.handleSendMessage.bind(this);
    }

    handleTextFieldChange(event) {
        const formChange = {
            form: {
                ...this.state.form,
                [event.target.id]: event.target.value
            }
        }
        this.setState({...this.state, ...formChange }, () => {
            console.log(this.state);
            /**
             * set state is asynchronous; putting console.log() 
             * outside of the callback method only logs previous state
             */
        });
    }
    
    callApi() {
        fetch("https://alexasapi.azurewebsites.net/testapi")
            .then(res => res.text()
            .then(res => this.setState({apiResponse: res})))
    }

    handleSendMessage() {
        const requestOpts = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.form)
        } 
        fetch("https://alexasapi.azurewebsites.net/message", requestOpts).then(res => res.json()).then(res => console.log(res));
    }
    
    componentDidMount() {
        this.callApi();
    }

    public render() {
        const { classes } = this.props;
        return (
            <div>
                <Typography variant="h2">Let's Connect!</Typography>
                <p>{this.state.apiResponse}</p>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="firstName" label="First Name" onChange={this.handleTextFieldChange} variant="outlined" required />
                    <TextField id="lastName" label="Last Name" onChange={this.handleTextFieldChange} variant="outlined" required />
                    <TextField id="email" label="Email Address" onChange={this.handleTextFieldChange} variant="outlined" required error={false} helperText="Please enter a valid email" />
                    <TextField id="message" label="Message" onChange={this.handleTextFieldChange} variant="outlined" multiline rows={4} placeholder="Drop me a message!"/>
                    <Button variant="contained" color="primary" onClick={this.handleSendMessage}>
                        Submit
                    </Button>
                </form>
            </div>
        )
    }
}

export default withStyles(styles)(Connect);