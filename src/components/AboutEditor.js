import React from "react";
import info from "../testInfo.json";
import "../stylesheets/about.css";
import TextEditor from "./TextEditor";

const AboutEditor = () => {
  return (
    <section className="about flex-column">
      <div className="about-headline">
        <TextEditor initialValue={info.about.headline} inline={true} />
      </div>
      <div className="about-info">
        <TextEditor initialValue={info.about.about} inline={true} />
      </div>
    </section>
  );
};

export default AboutEditor;
