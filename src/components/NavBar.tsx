/* eslint-disable react/prefer-stateless-function */
import React from "react";
import "../styles/NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="nav-bar">
        <h1 className="nav-title">CV Generator</h1>
      </nav>
    );
  }
}

export default NavBar;
