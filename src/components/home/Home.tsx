import { createStyles, Grid, Theme, Typography, withStyles } from '@material-ui/core';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

const styles = (theme: Theme) => 
    createStyles({
        listWrapper: {
            'padding-left': 0,
            'list-style-position': 'inside',
        },
        header: {
            margin: theme.spacing(2),
            fontFamily: 'Mermaid',
        },
        body: {
            margin: theme.spacing(2, 10)
        },
        image: {
            maxWidth: '200px'
        }
    })
class Home extends React.Component<any> {
    public render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Typography variant="h1" className={classes.header}>Alexa Snyder</Typography>
                <br />
                <Typography>
                    Welcome to my personal site I whipped up for kicks and giggles.
                </Typography>
                <div className="container-fluid">
            <Grid container>
                <Grid item xs={12} sm={4} md={2}>
                    <img className={classes.image} src={'me.jpg'} alt="me"/>
                </Grid>
                <Grid item xs={12} sm={8} md={10}>
                
                <Typography className={classes.body}>
                    My interest in development began during my short stint as a technical recruiter. 
                    After being introduced to many developers, I became interested in the work they did. 
                    I began exploring Codecademy tutorials and attending Girl Develop It classes
                    for introductory to intermediate level HTML and Javascript. During the same time I started experimenting with development, 
                    I was hired by my current employer as a Project Coordinator.
                    I worked directly with developers to deliver requirements for client projects, and was given opportunities to further develop my new interest. 
                    Six months into the job I was given the opportunity to join the development team. 
                    I have now been a contributing member of my company's development team for over four years now.
                </Typography>
                <Typography className={classes.body}>
                    In my free time I enjoy spending time outdoors, visiting a local brewery, and spinning around in my aerial silk hammock. 
                </Typography>
                </Grid>
            </Grid>
        </div>
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