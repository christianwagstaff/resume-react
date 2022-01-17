import React from "react";
import Project from "./Project";
import info from "../testInfo.json";
import "../stylesheets/project.css";

const Projects = () => {
  return (
    <section className="flex-column projects">
      <h2>Selected Projects</h2>
      <div className="project-list flex-column">
        {[...info.projects].map((proj, index) => (
          <Project key={index} project={proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
