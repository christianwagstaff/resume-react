import React, { useState } from "react";
import { ReactComponent as Menu } from "../images/menu_black_24dp.svg";
import { ReactComponent as Close } from "../images/close_black_24dp.svg";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav>
      <button
        className="showHideNav"
        onClick={() => {
          setToggleMenu(!toggleMenu);
        }}
      >
        {toggleMenu ? <Close /> : <Menu />}
      </button>
      <ul className={toggleMenu ? "active" : ""}>
        <li>Home</li>
        <li>Projects</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default NavBar;
