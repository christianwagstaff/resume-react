import React, { useEffect, useState } from "react";
import { ReactComponent as Menu } from "../images/menu_black_24dp.svg";
import { ReactComponent as Close } from "../images/close_black_24dp.svg";
import PropTypes from "prop-types";

const NavBar = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 600) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  });
  return (
    <nav>
      {isMobile && (
        <button
          className="showHideNav"
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
        >
          {toggleMenu ? <Close /> : <Menu />}
        </button>
      )}
      {isMobile && toggleMenu && (
        <DropDownMenu>
          <ul className={`${toggleMenu ? "active" : ""} navbar-nav`}>
            {props.children}
          </ul>
        </DropDownMenu>
      )}
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
};

NavBar.propTypes = {
  children: PropTypes.array,
};

export default NavBar;

function DropDownMenu(props) {
  return <div className="dropdown">{props.children}</div>;
}
DropDownMenu.propTypes = {
  children: PropTypes.element,
};
