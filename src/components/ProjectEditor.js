import React, { useState } from "react";
import PropTypes from "prop-types";
import fetchAPI from "../functions/fetchAPI";

const Project = (props) => {
  const proj = props.project;
  const [name, setName] = useState(proj.name ? proj.name : "");
  const [img, setImg] = useState(proj.img ? proj.img : "");
  const [details, setDetails] = useState(proj.details ? proj.details : "");
  function onDelete(e) {
    e.preventDefault();
    props.onDelete();
  }
  const submitProject = async (e) => {
    e.preventDefault();
    let response;
    let content = { name, img, details };
    if (props.id) {
      content.id = props.id;
      response = await fetchAPI("projects", "put", content);
      console.log(response);
    } else {
      response = await fetchAPI("projects", "post", content);
      props.onSubmit(response.project);
      setName("");
      setDetails("");
      setImg("");
    }
  };
  return (
    <form
      className="flex-column project small"
      onSubmit={(e) => submitProject(e)}
    >
      <label className="flex-column small-gap">
        Image Url:
        <input
          name="img"
          value={img}
          placeholder="Image Url"
          onChange={(e) => setImg(e.target.value)}
        />
      </label>
      <label className="flex-column small-gap">
        Project Name:
        <input
          className="project-name"
          value={name}
          placeholder="Project Name"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="flex-column small-gap">
        Project Details:
        <textarea
          className="project-details"
          value={details}
          placeholder={proj.details ? "" : "Project Details"}
          onChange={(e) => setDetails(e.target.value)}
        />
      </label>
      <input type="submit" value={proj.name ? "Update" : "Save"} />
      {proj.name && (
        <button className="edit delete" onClick={onDelete}>
          Delete
        </button>
      )}
    </form>
  );
};

Project.propTypes = {
  project: PropTypes.object,
  onDelete: PropTypes.func,
  id: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default Project;
