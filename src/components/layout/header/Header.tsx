import * as React from "react";
import { NavLink } from "react-router-dom"
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

class Header extends React.Component<any> {
  public render() {
    const activeStyle = { color: "#F15B2A" };
    return (
      <nav>
        <NavLink to="/" activeStyle={activeStyle} exact>
          <HomeIcon /> Home
        </NavLink>
        {" | "}
        <NavLink to="/connect" activeStyle={activeStyle}>
          <MailIcon /> Connect
        </NavLink>
        {" | "}
        <NavLink to="/about" activeStyle={activeStyle}>
          <EmojiPeopleIcon /> About
        </NavLink>
      </nav>
    );
  }
};

export default Header;
