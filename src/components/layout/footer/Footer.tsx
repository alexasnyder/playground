import { AppBar, Button, IconButton, makeStyles, Paper } from "@material-ui/core";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    iconBtn: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    iconLink: {
        color: '#FFF',
        '&:hover': {
          color: theme.palette.secondary.light
        }
    },
    paper: {
      'box-shadow': 'none'
    },
    toolbar: theme.mixins.toolbar
  }));

export default function Footer() {
    const classes = useStyles();
    let width;

    useEffect(() => {
      window.addEventListener('resize', () => {
        width  = window.innerWidth;
        console.log('my width :::', width)
     })
    },[window])

    function appBarPosition() {
      return window.innerWidth > 1224 ? "fixed" : "sticky";
    }

    return (
      <React.Fragment>
          <AppBar position={appBarPosition()} color="primary" className={classes.appBar}>
            <div>
              <IconButton>
                <a href="https://www.instagram.com/alexamsnyder/" target="_blank" className={classes.iconLink}>
                  <InstagramIcon />
                </a>
              </IconButton>
              <IconButton>
                <a href="https://www.linkedin.com/in/alexa-snyder-59b73457/" target="_blank" className={classes.iconLink}>
                  <LinkedInIcon />
                </a>
              </IconButton>
            </div>
        </AppBar>
        <Paper className={classes.paper}>
          <div className={classes.toolbar} />
        </Paper>
      </React.Fragment>
    )
  }