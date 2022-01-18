import React from "react";
import Project from "./ProjectEditor";
import info from "../testInfo.json";
import "../stylesheets/project.css";

const Projects = () => {
  return (
    <section className="flex-column projects">
      <h2>Edit Projects</h2>
      <div className="project-list flex-column edit">
        {[...info.projects].map((proj, index) => (
          <Project key={index} project={proj} />
        ))}
        <Project project={{}} />
      </div>
    </section>
  );
};

export default Projects;
