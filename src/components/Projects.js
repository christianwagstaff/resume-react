import React from "react";
import Project from "./Project";
import info from "../testInfo.json";
import "../stylesheets/project.css";

const Projects = () => {
  return (
    <div className="project-list flex-column">
      <h2>Selected Projects</h2>
      {[...info.projects].map((proj, index) => (
        <Project key={index} name={proj.name} details={proj.details} />
      ))}
    </div>
  );
};

export default Projects;
