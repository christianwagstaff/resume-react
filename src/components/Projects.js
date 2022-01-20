import React from "react";
import Project from "./Project";
import PropTypes from "prop-types";
import "../stylesheets/project.css";

const Projects = (props) => {
  const info = props.info ? props.info : [];
  return (
    <section className="flex-column projects">
      <h2>Selected Projects</h2>
      <div className="project-list flex-column">
        {info.map((proj, index) => (
          <Project key={index} project={proj} />
        ))}
      </div>
    </section>
  );
};

Projects.propTypes = {
  info: PropTypes.array,
};
export default Projects;
