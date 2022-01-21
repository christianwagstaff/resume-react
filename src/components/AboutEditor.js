import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import "../stylesheets/about.css";
import TextEditor from "./TextEditor";

const AboutEditor = (props) => {
  const [data, setData] = useState({});
  // Load Data on initial load
  useEffect(() => {
    // console.log(props.info);
    setData(props.info);
  }, []);
  return (
    <section className="about flex-column">
      <div className="about-headline">
        <TextEditor
          initialValue={data.headline ? data.headline : "About Headline"}
          inline={true}
          src="about"
          type="put"
          objName="headline"
          id={data._id}
        />
      </div>
      <div className="about-info">
        <TextEditor
          initialValue={data.about ? data.about : "About Info"}
          inline={true}
          src="about"
          type="put"
          objName="about"
          id={data._id}
        />
      </div>
    </section>
  );
};

AboutEditor.propTypes = {
  info: PropTypes.object,
};

export default AboutEditor;
