import PropTypes from "prop-types";
import React from "react";
import "../stylesheets/about.css";
import Parser from "./Parser";

const About = (props) => {
  const info = props.info ? props.info[0] : { headline: "", about: "" };
  return (
    <section className="about flex-column">
      <h2 className="about-headline">
        <Parser>{info.headline}</Parser>
      </h2>
      <p className="about-info">{info.about}</p>
    </section>
  );
};

About.propTypes = {
  info: PropTypes.array,
};

export default About;
