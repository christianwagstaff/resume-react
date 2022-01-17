import React from "react";
import info from "../testInfo.json";
import "../stylesheets/about.css";
import TextEditor from "./TextEditor";

const AboutEditor = () => {
  return (
    <section className="about flex-column">
      <h2 className="about-headline">
        <TextEditor initialValue={info.about.headline} inline={true} />
      </h2>
      <p className="about-info">
        <TextEditor initialValue={info.about.about} inline={true} />
      </p>
    </section>
  );
};

export default AboutEditor;
