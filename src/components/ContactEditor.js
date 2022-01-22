import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ContactEditor = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  // Get Data From API on Load
  useEffect(() => {
    setData(props.info);
  }, []);

  const submitNewContact = async (e) => {
    e.preventDefault();
    if (e.target[0].value === "" || e.target[1].value === "") {
      return;
    }
    const newContact = {
      links: { name: e.target[0].value, url: e.target[1].value },
    };
    const response = await fetch(
      `https://whispering-springs-24965.herokuapp.com/api/contact`,
      {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("jwt"),
        },
        body: JSON.stringify(newContact),
      }
    );
    const contact = await response.json();
    setData([...data, contact.contact]);
    e.target[0].value = "";
    e.target[1].value = "";
  };

  const deleteItem = async (e, id, index) => {
    e.preventDefault();
    const deleteContact = {
      id: id,
    };
    const confirm = window.confirm(
      "Are you sure you want to delete this contact?"
    );
    if (!confirm) {
      return;
    }
    const response = await fetch(
      `https://whispering-springs-24965.herokuapp.com/api/contact`,
      {
        method: "delete",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("jwt"),
        },
        body: JSON.stringify(deleteContact),
      }
    );
    if (response.status === 401) {
      return navigate("/logout");
    }
    const contact = await response.json();
    if (contact.msg === "Contact Deleted") {
      const updatedData = removeAtIndex(data, index);
      setData(updatedData);
    }
  };

  const updateContact = async (e, id, index) => {
    e.preventDefault();
    const newContact = {
      id,
      links: { name: e.target[0].value, url: e.target[1].value },
    };
    const response = await fetch(
      `https://whispering-springs-24965.herokuapp.com/api/contact`,
      {
        method: "put",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("jwt"),
        },
        body: JSON.stringify(newContact),
      }
    );
    const contact = await response.json();
    const newData = replaceAtIndex([...data], index, contact.contact);
    if (contact.msg === "Contact Updated") {
      setData(newData);
    }
  };

  return (
    <div className="flex-column">
      <h3>Contact Info</h3>
      <p>Find me on</p>
      <div className="flex-horizontal">
        {[...data].map((contact, index) => (
          <form
            key={contact._id}
            className="flex-horizontal small"
            onSubmit={(e) => updateContact(e, contact._id, index)}
          >
            <input name="name" defaultValue={contact.links.name} />
            <input name="url" defaultValue={contact.links.url} />
            <input type="submit" value="Update" />
            <button
              className="delete"
              onClick={(e) => deleteItem(e, contact._id, index)}
            >
              X
            </button>
          </form>
        ))}
        <ContactForm onSubmit={(e) => submitNewContact(e)} />
      </div>
    </div>
  );
};

ContactEditor.propTypes = {
  info: PropTypes.array,
};

export default ContactEditor;

const ContactForm = (props) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  return (
    <form className="flex-horizontal small" onSubmit={props.onSubmit}>
      <input
        name="name"
        placeholder="Display Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        name="url"
        placeholder="Url"
        onChange={(e) => setUrl(e.target.value)}
        value={url}
      />
      <input type="submit" value="Create New Link" />
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

function removeAtIndex(array, index) {
  let editArray = array.slice(0);
  editArray.splice(index, 1);
  return editArray;
}

function replaceAtIndex(array, index, value) {
  const ret = array.slice(0);
  ret[index] = value;
  return ret;
}
