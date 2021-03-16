import React from "react";
import { AppBar, IconButton, makeStyles } from "@material-ui/core";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
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
    }
  }));

export default function Footer() {
    const classes = useStyles();

    return (
      <React.Fragment>
          <AppBar position="fixed" color="primary" className={classes.appBar}>
            <IconButton color="inherit" className={classes.iconBtn}>
                <Link className={classes.iconLink} to="route" onClick={(event) => {event.preventDefault(); window.open("https://www.instagram.com/alexamsnyder/")}} target="_blank">
                    <InstagramIcon />
                </Link>
            </IconButton>
            <IconButton color="inherit" className={classes.iconBtn}>
                <Link className={classes.iconLink} to="route" onClick={(event) => {event.preventDefault(); window.open("https://www.linkedin.com/in/alexa-snyder-59b73457/")}} target="_blank">
                    <LinkedInIcon />
                </Link>
            </IconButton>
        </AppBar>
      </React.Fragment>
    )
  }