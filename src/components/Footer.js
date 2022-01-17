import React from "react";
import "../stylesheets/footer.css";
import info from "../testInfo.json";

const Footer = () => {
  return (
    <footer className="flex-column">
      <h3>Haily Gonzalez</h3>
      <p>{info.about.footline}</p>
    </footer>
  );
};

export default Footer;
