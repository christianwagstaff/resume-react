import React from "react";
import AboutEditor from "../components/AboutEditor";
import ContactEditor from "../components/ContactEditor";
import Projects from "../components/ProjectsEditor";

const Editor = () => {
  return (
    <main>
      <AboutEditor />
      <ContactEditor />
      <Projects />
    </main>
  );
};

export default Editor;
