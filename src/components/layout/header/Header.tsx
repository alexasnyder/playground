import * as React from "react";
import clsx from 'clsx';
import { NavLink } from "react-router-dom"
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import MenuOutlined from '@material-ui/icons/MenuOutlined';
import MediaQuery, {useMediaQuery} from 'react-responsive';
import { AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, makeStyles, Toolbar,  } from "@material-ui/core";

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
      fontFamily: 'GeosansLight',
      textDecoration: 'none',
      color: theme.palette.primary.main,
      '&:hover': {
        color: theme.palette.secondary.light
      }
    },
    desktopNavLink: {
      fontFamily: 'GeosansLight',
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

const NavItems = () => {
  const classes = useStyles();
  const isDesktop = useMediaQuery({ query: '(min-device-width: 1224px)'})
  return (
    <List className={isDesktop ? classes.desktopNavBar : ''}>
      {navItemsCollection.map(item => {
        return (
          <ListItem button key={item.key}>
            <NavLink className={isDesktop ? classes.desktopNavLink : classes.navLink } to={item.route} exact>
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
      <NavItems />
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
        <NavItems />
      </Toolbar>
    </AppBar>
  )
}

export default function Header() {
  return (
    <React.Fragment>
      <MediaQuery minDeviceWidth={1224}>
        <DesktopHeader/>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1224}>
        <MobileHeader />
      </MediaQuery>
      
    </React.Fragment>
  )
}

