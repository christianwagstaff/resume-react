import React from "react";
import Project from "./Project";
import info from "../testInfo.json";
import "../stylesheets/project.css";

const Projects = () => {
  return (
    <section className="project-list flex-column">
      <h2>Selected Projects</h2>
      {[...info.projects].map((proj, index) => (
        <Project key={index} project={proj} />
      ))}
    </section>
  );
};

export default Projects;
