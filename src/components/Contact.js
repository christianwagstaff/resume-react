import React from "react";
import PropTypes from "prop-types";

const Contact = (props) => {
  const info = props.info ? props.info : [{ links: [] }];
  return (
    <div className="flex-column">
      <h3>Contact Info</h3>
      <p>Find me on</p>
      <div className="flex-horizontal">
        {info.map((contact, index) => (
          <a
            key={index}
            href={contact.links.url}
            target="_blank"
            rel="noreferrer"
          >
            {contact.links.name}
          </a>
        ))}
      </div>
    </div>
  );
};

Contact.propTypes = {
  info: PropTypes.array,
};

export default Contact;
