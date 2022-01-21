import React, { useEffect, useState } from "react";
import Project from "./ProjectEditor";
import "../stylesheets/project.css";
import { removeAtIndex } from "../functions/arrayUtils";
import fetchAPI from "../functions/fetchAPI";
import PropTypes from "prop-types";

const Projects = (props) => {
  const [data, setData] = useState([]);
  // Get Project List on Load
  useEffect(() => {
    setData(props.info);
  }, []);

  const deleteItem = async (id, index) => {
    const itemContent = {
      id: id,
    };
    const response = await fetchAPI("projects", "delete", itemContent);
    if (response.msg === "Project Deleted") {
      const updatedData = removeAtIndex(data, index);
      setData(updatedData);
    }
  };

  const onSubmit = (newProj) => {
    setData([...data, newProj]);
  };

  return (
    <section className="flex-column projects">
      <h2>Edit Projects</h2>
      <div className="project-list flex-column edit">
        {data.map((proj, index) => (
          <Project
            key={proj._id}
            id={proj._id}
            project={proj}
            onDelete={() => deleteItem(proj._id, index)}
            onSubmit={onSubmit}
          />
        ))}
        <Project project={{}} onSubmit={onSubmit} />
      </div>
    </section>
  );
};

Projects.propTypes = {
  info: PropTypes.array,
};

export default Projects;
