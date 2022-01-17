import React from "react";
import info from "../testInfo.json";

const Contact = () => {
  return (
    <div className="flex-column">
      <h3>Contact Info</h3>
      <p>Find me on</p>
      <div className="flex-horizontal">
        {[...info.contact.links].map((contact, index) => (
          <a key={index} href={contact.url} target="_blank" rel="noreferrer">
            {contact.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
