import React from "react";
import PropTypes from "prop-types";

const NavItem = (props) => {
  return <li className="navbar-item">{props.name}</li>;
};

NavItem.propTypes = {
  name: PropTypes.string,
};

export default NavItem;
