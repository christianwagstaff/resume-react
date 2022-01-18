import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/footer.css";
import info from "../testInfo.json";

const Footer = () => {
  return (
    <footer className="flex-column">
      <Link to="/editor" className="no-underline">
        <h3>Haily Gonzalez</h3>
      </Link>
      <p>{info.about.footline}</p>
    </footer>
  );
};

export default Footer;
