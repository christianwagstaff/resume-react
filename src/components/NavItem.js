import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavItem = (props) => {
  return (
    <Link to={props.url}>
      <li className="navbar-item"> {props.name}</li>
    </Link>
  );
};

NavItem.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
};

export default NavItem;
