import React from "react";
import info from "../testInfo.json";
import TextEditor from "./TextEditor";

const ContactEditor = () => {
  return (
    <div className="flex-column">
      <h3>Contact Info</h3>
      <p>Find me on</p>
      <div className="flex-column">
        {[...info.contact.links].map((contact, index) => (
          <div key={index} className="flex-horizontal">
            <TextEditor initialValue={contact.name} inline={true} />
            <TextEditor initialValue={contact.url} inline={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactEditor;
