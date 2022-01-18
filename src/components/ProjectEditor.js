import React from "react";
import PropTypes from "prop-types";
import TextEditor from "./TextEditor";

const Project = (props) => {
  const proj = props.project;
  return (
    <form className="flex-column project small">
      <label className="flex-column">
        Image Url:
        <input
          name="img"
          value={proj.img ? proj.img : ""}
          placeholder="Image Url"
        />
      </label>
      <label className="flex-column">
        Project Name:
        <input
          className="project-name"
          value={proj.name ? proj.name : ""}
          placeholder="Project Name"
        />
      </label>
      <label className="flex-column">
        Project Details:
        <TextEditor
          className="project-details"
          initialValue={proj.details ? proj.details : "Project Details"}
        />
      </label>
    </form>
  );
};

Project.propTypes = {
  project: PropTypes.object,
};

export default Project;
