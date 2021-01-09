import * as React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import theme from '../../theme';

const useStyles = makeStyles({
    header: {
        margin: theme.spacing(2)
    },
    body: {
        margin: theme.spacing(2, 10)
    },
    image: {
        maxWidth: '200px'
    }
});

export default function About() {

    const classes = useStyles();

    return (
        <div className="container-fluid">
            <Typography variant="h2" className={classes.header}>About Me</Typography>
            <Grid container>
                <Grid item xs={12} sm={4} md={2}>
                    <img className={classes.image} src={'me.jpg'} alt="me"/>
                </Grid>
                <Grid item xs={12} sm={8} md={10}>
                <Typography variant="h3" className={classes.header}>My name is Alexa Snyder and I'm a full-stack software developer.</Typography>
                <Typography className={classes.body}>
                    My interest in development began during my short stint as a technical recruiter. After being introduced to many developers, I became interested in the work they did. I began following along with Codecademy tutorials and attending Girl Develop It classes
                    for introductory to intermediate level HTML and Javascript. During the same time I started experimenting with development, I was hired by my current employer as a Project Coordinator.
                    I worked directly with developers to deliver requirements for client projects, and was given opportunities to further develop my new interest. Six months into the job, my position was 
                    eliminated and I was moved over to the development team. I have now been a contributing member of my company's development team for over four years now.
                </Typography>
                <Typography className={classes.body}>
                    In my free time I enjoy spending time outdoors, visiting a local brewery, and spinning around in my aerial silk hammock. 
                </Typography>
                </Grid>
            </Grid>
            
            
        </div>
    )
};