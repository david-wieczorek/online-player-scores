import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "./w.png";

class Header extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="logo home">
          <NavLink exact to="/" activeClassName="active">
            <img className="welcome-logo" src={logo} alt="Logo" />
          </NavLink>
        </div>
        <nav>
          <ul className="nav nav-vertical">
            <li>
              <NavLink to="/codes" activeClassName="active">
                <i className="fa fa-code" aria-hidden="true" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
