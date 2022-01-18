import React from "react";
import NavBar from "./NavBar";
import NavItem from "./NavItem";
import "../stylesheets/header.css";

const Header = () => {
  return (
    <header>
      <h1>Haily Gonzalez</h1>
      <NavBar>
        <NavItem name="Home" url="/" />
        <NavItem name="Logout" url="/logout" />
      </NavBar>
    </header>
  );
};

export default Header;
