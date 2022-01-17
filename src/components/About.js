import React from "react";
import info from "../testInfo.json";
import "../stylesheets/about.css";

const About = () => {
  return (
    <section className="about flex-column">
      <h2 className="about-headline">{info.about.headline}</h2>
      <p className="about-info">{info.about.about}</p>
    </section>
  );
};

export default About;
