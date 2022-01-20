import React, { useEffect, useState } from "react";
import Project from "./ProjectEditor";
import "../stylesheets/project.css";
import { removeAtIndex } from "../functions/arrayUtils";
import fetchAPI from "../functions/fetchAPI";

const Projects = () => {
  const [data, setData] = useState([]);
  // Get Project List on Load
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/api/projects`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data.projects);
      })
      .catch((err) => {
        console.error(`Data Fetching: ${err}`);
      });
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
    console.log(newProj);
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

export default Projects;
