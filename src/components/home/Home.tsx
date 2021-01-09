import { Typography } from '@material-ui/core';
import * as React from 'react';

class Home extends React.Component<any> {
    public render() {
        return (
            <React.Fragment>
                <Typography variant="h1">Welcome!</Typography>
                <Typography>
                    UI is hosted on Heroku
                </Typography>
                <Typography>
                    <small><a href="https://github.com/alexasnyder/playground" target="_blank">View on GitHub</a></small>
                </Typography>
                <Typography>
                    Server is hosted on Azure
                </Typography>
                <Typography>
                <small><a href="https://github.com/alexasnyder/playground-server" target="_blank">View on GitHub</a></small>
                </Typography>
            </React.Fragment>
        )
    }
}

export default Home;