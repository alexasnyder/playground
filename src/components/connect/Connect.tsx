import React from "react";
import { Button, createStyles, TextField, Theme, Typography, withStyles } from "@material-ui/core";
import ReCAPTCHA from "react-google-recaptcha";

const recaptchaRef: ReCAPTCHA = React.createRef();

interface ConnectForm {
    firstName?: string;
    lastName?: string;
    email?: string;
    message?: string;
}
interface ConnectState {
    form: ConnectForm;
    reCAPTCHAValid: boolean;
    apiResponse?: string;
}

const styles = (theme: Theme) => 
    createStyles({
        form: {
            margin: '0 auto',
            width: '25rem',
            '& .MuiTextField-root': {
                display: 'flex',
                margin: theme.spacing(2),
            }
        },
        reCaptcha: {
            display: 'inline-block'
        },
        submitBtn: {
            display: 'flex',
            margin: '0 auto'
        }
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
            },
            reCAPTCHAValid: false
        };

        this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
        this.onChange = this.onChange.bind(this);
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

    onChange(token) {
        fetch('https://alexasapi.azurewebsites.net/validaterecaptcha', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ token: token})
        })
        .then((response: any) => {
            if (response.status == 200) {
                this.setState({...this.state, reCAPTCHAValid: true});
            }
        })
        .catch((err) => console.error(err))
    }
    
    handleSendMessage() {
        const requestOpts = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.form)
        } 
        fetch("https://alexasapi.azurewebsites.net/message", requestOpts)
            .then(res => res.json())
            .catch((err) => console.error(err))
            .finally(() => recaptchaRef.current.reset());
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
                <form className={classes.form} noValidate autoComplete="off">
                    <TextField id="firstName" label="First Name" onChange={this.handleTextFieldChange} variant="outlined" required />
                    <TextField id="lastName" label="Last Name" onChange={this.handleTextFieldChange} variant="outlined" required />
                    <TextField id="email" label="Email Address" onChange={this.handleTextFieldChange} variant="outlined" required error={false} helperText="Please enter a valid email" />
                    <TextField id="message" label="Message" onChange={this.handleTextFieldChange} variant="outlined" multiline rows={4} placeholder="Drop me a message!"/>
                    <ReCAPTCHA
                        className={classes.reCaptcha}
                        ref={recaptchaRef}
                        sitekey="6LdWvRkaAAAAANWGqTk1rFczOqDFDmAO53BbB0qx"
                        onChange={this.onChange}
                    />
                    <Button className={classes.submitBtn} variant="contained" color="primary" disabled={!this.state.reCAPTCHAValid} onClick={this.handleSendMessage}>
                        Submit
                    </Button>
                </form>
            </div>
        )
    }
}

export default withStyles(styles)(Connect);