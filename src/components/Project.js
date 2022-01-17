import React from "react";
import PropTypes from "prop-types";

const Project = (props) => {
  const proj = props.project;
  return (
    <article className="flex-column project">
      {proj.img ? <img src={proj.img} /> : null}
      <h3 className="project-name">{proj.name}</h3>
      <p className="project-details">{proj.details}</p>
    </article>
  );
};

Project.propTypes = {
  project: PropTypes.object,
};

export default Project;
