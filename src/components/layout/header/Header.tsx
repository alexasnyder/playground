import * as React from "react";
import { NavLink } from "react-router-dom"

class Header extends React.Component<any> {
  public render() {
    const activeStyle = { color: "#F15B2A" };
    return (
      <nav>
        <NavLink to="/" activeStyle={activeStyle} exact>
          Home
        </NavLink>
        {" | "}
        <NavLink to="/courses" activeStyle={activeStyle}>
          Courses
        </NavLink>
        {" | "}
        <NavLink to="/about" activeStyle={activeStyle}>
          About
        </NavLink>
      </nav>
    );
  }
};

export default Header;
