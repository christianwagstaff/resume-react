import React from "react";
import PropTypes from "prop-types";

const Project = (props) => {
  return (
    <article className="flex-column project">
      <h3 className="project-name">{props.name}</h3>
      <p className="project-details">{props.details}</p>
    </article>
  );
};

Project.propTypes = {
  name: PropTypes.string,
  details: PropTypes.string,
};

export default Project;
