import * as React from "react";
import clsx from 'clsx';
import { NavLink } from "react-router-dom"
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import MenuOutlined from '@material-ui/icons/MenuOutlined'
import { Divider, Drawer, IconButton, List, ListItem, ListItemIcon, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => (
  {
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    menuBtn: {
      marginLeft: '5px',
      display: 'flex'
    },
    navLink: {
      textDecoration: 'none',
      color: theme.palette.primary.main,
      '&:hover': {
        color: theme.palette.secondary.main
      }
    }
  }
));

type Anchor = 'left';

export default function Header() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: false,
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key="home">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <NavLink className={classes.navLink} to="/" exact>
            Home
          </NavLink>
        </ListItem>
        <ListItem button key="connect">
          <ListItemIcon>
            <MailIcon /> 
          </ListItemIcon>
          <NavLink className={classes.navLink} to="/connect" exact>
            Connect
          </NavLink>
        </ListItem>
        <ListItem button key="about">
          <ListItemIcon>
            <EmojiPeopleIcon />
          </ListItemIcon>
          <NavLink className={classes.navLink} to="/about" exact>
            About
          </NavLink>
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <React.Fragment key="left">
      <IconButton className={classes.menuBtn} edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer('left', true)}>
        <MenuOutlined />
      </IconButton>
      <Drawer anchor="left" open={state['left']} onClose={toggleDrawer('left', false)}>
        {list('left')}
      </Drawer>
    </React.Fragment>
  )  
}

