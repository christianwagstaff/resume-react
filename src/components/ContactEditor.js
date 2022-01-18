import React from "react";
import info from "../testInfo.json";

const ContactEditor = () => {
  return (
    <div className="flex-column">
      <h3>Contact Info</h3>
      <p>Find me on</p>
      <div className="flex-horizontal">
        {[...info.contact.links].map((contact, index) => (
          <form key={index} className="flex-horizontal small">
            <input name="name" value={contact.name} />
            <input name="url" value={contact.url} />
            <input type="submit" value="Update" />
          </form>
        ))}
        <form className="flex-horizontal small">
          <input name="name" placeholder="Display Name" />
          <input name="url" placeholder="Url" />
          <input type="submit" value="Create New Link" />
        </form>
      </div>
    </div>
  );
};

export default ContactEditor;
