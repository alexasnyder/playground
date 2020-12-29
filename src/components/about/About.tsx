import * as React from 'react';
import { Typography } from '@material-ui/core';

class About extends React.Component<any> {
    public render () {
        return (
            <React.Fragment>
                <Typography variant="h2">About Me</Typography>
                <Typography variant="h3">My name is Alexa Snyder and I'm a full-stack software developer.</Typography>
                <Typography>
                    My interest in development began during my short stint as a technical recruiter. After being introduced to many developers, I became interested in the work they did. I began following along with Codecademy tutorials and attending Girl Develop It classes
                    for introductory to intermediate level HTML and Javascript. During the same time I started experimenting with development, I was hired by my current employer as a Project Coordinator.
                    I worked directly with developers to deliver requirements for client projects, and was given opportunities to further develop my new interest. Six months into the job, my position was 
                    eliminated and I was moved over to the development team. I have now been a contributing member of my company's development team for over four years now.
                </Typography>
                <Typography>
                    In my free time I enjoy spending time outdoors, visiting a local brewery, and spinning around in my aerial silk hammock. 
                </Typography>
            </React.Fragment>
        )
    }
}

export default About;