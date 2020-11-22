import { Button, createStyles, TextField, Theme, Typography, withStyles } from "@material-ui/core";
import React from "react";

interface ConnectState {
    apiResponse: string;
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
        this.state = {apiResponse: ""};
    }
    
    callApi() {
        fetch("https://alexasapi.azurewebsites.net/testapi")
            .then(res => res.text()
            .then(res => this.setState({apiResponse: res})))
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
                    <TextField id="first-name" label="First Name" variant="outlined" required />
                    <TextField id="last-name" label="Last Name" variant="outlined" required />
                    <TextField id="email" label="Email Address" variant="outlined" required error={false} helperText="Please enter a valid email" />
                    <TextField id="inquiry" label="Message" variant="outlined" multiline rows={4} placeholder="Drop me a message!"/>
                    <Button variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
            </div>
        )
    }
}

export default withStyles(styles)(Connect);