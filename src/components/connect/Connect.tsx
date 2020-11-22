import { Typography } from "@material-ui/core";
import React from "react";

interface ConnectState {
    apiResponse: string;
}

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
        return (
            <div>
                <Typography variant="h2">Let's Connect!</Typography>
                <p>{this.state.apiResponse}</p>
            </div>
        )
    }
}

export default Connect;