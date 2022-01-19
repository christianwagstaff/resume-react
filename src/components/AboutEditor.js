import React, { useEffect, useState } from "react";
import "../stylesheets/about.css";
import TextEditor from "./TextEditor";

const AboutEditor = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/api/about`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.error(`Data Fetching: ${err}`);
      });
  }, []);
  return (
    <section className="about flex-column">
      <div className="about-headline">
        <TextEditor
          initialValue={data.headline ? data.headline : "About Headline"}
          inline={true}
        />
      </div>
      <div className="about-info">
        <TextEditor
          initialValue={data.about ? data.about : "About Info"}
          inline={true}
        />
      </div>
    </section>
  );
};

export default AboutEditor;
