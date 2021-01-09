import * as React from "react";
import clsx from 'clsx';
import { NavLink } from "react-router-dom"
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import MenuOutlined from '@material-ui/icons/MenuOutlined'
import { AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, makeStyles, Toolbar } from "@material-ui/core";

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
        color: theme.palette.secondary.light
      }
    },
    desktopNavLink: {
      display: 'flex',
      textDecoration: 'none',
      color: '#FFF',
      '&:hover': {
        color: theme.palette.secondary.light
      }
    },
    desktopNavBar: {
      display: 'flex',
    }
  }
));

type Anchor = 'left';

const navItemsCollection: any = [
  {
    key: 'home',
    route: '/',
    name: 'Home',
    icon: <HomeIcon />
  },
  {
    key: 'connect',
    route: '/connect',
    name: 'Connect',
    icon: <MailIcon />
  },  {
    key: 'about',
    route: '/about',
    name: 'About',
    icon: <EmojiPeopleIcon />
  },
];

const NavItems = (props) => {
  const classes = useStyles();
  return (
    <List className={classes.desktopNavBar}>
      {navItemsCollection.map(item => {
        return (
          <ListItem button key={item.key}>
            <NavLink className={props.isMobile ? classes.navLink : classes.desktopNavLink} to={item.route} exact>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              {item.name}
            </NavLink>
          </ListItem>
        )
      })}
    </List>
  )
}

function MobileHeader() {
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
      <NavItems isMobile={true}/>
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

function DesktopHeader() {
  return (
    <AppBar position="static">
      <Toolbar>
        <NavItems isMobile={false}/>
      </Toolbar>
    </AppBar>
  )
}

export default function Header() {
  return (
    // <MobileHeader />
    <DesktopHeader/>
  )
}

