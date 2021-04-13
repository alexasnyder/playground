import { createStyles, Theme, Typography, withStyles } from '@material-ui/core';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

const styles = (theme: Theme) => 
    createStyles({
        listWrapper: {
            'padding-left': 0,
            'list-style-position': 'inside',
        }
    })
class Home extends React.Component<any> {
    public render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Typography variant="h2">Hey There!</Typography>
                <br />
                <Typography>
                    Welcome to my personal site I whipped up for kicks and giggles. As you can probably infer, I am <strong>not</strong> a designer. My primary focus right 
                    now lies solely in backend work (C#/.Net). I started my development career as a front-end developer, so I have this site to keep my skills sharp.
                    Key features of this site:
                    <ul className={classes.listWrapper}>
                        <li>Google ReCAPTCHA</li>
                        <li>SendGrid integration for emails</li>
                        <li>Google Analytics</li>
                    </ul>
                </Typography>
                <br />
                <br />
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

export default withStyles(styles)(Home);