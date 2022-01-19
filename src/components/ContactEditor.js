import propTypes from "prop-types";
import React, { useState, useEffect } from "react";

const ContactEditor = () => {
  const [data, setData] = useState({ contact: [] });
  // Get Data From API on Load
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/api/contact`)
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

  const submitNewContact = async (e) => {
    e.preventDefault();
    if (e.target[0].value === "" || e.target[1].value === "") {
      return;
    }
    const newContact = {
      links: { name: e.target[0].value, url: e.target[1].value },
    };
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/api/contact`,
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
    setData({ contact: [...data.contact, contact.contact] });
    e.target[0].value = "";
    e.target[1].value = "";
  };

  const deleteItem = async (e, id, index) => {
    e.preventDefault();
    const deleteContact = {
      id: id,
    };
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/api/contact`,
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
    const contact = await response.json();
    if (contact.msg === "Contact Deleted") {
      const updatedData = removeAtIndex(data.contact, index);
      setData({ contact: updatedData });
    }
  };

  const updateContact = async (e, id, index) => {
    e.preventDefault();
    const newContact = {
      id,
      links: { name: e.target[0].value, url: e.target[1].value },
    };
    console.log(JSON.stringify(newContact));
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/api/contact`,
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
    console.log(contact);
    const newData = replaceAtIndex(data.contact, index, contact.contact);
    console.log(newData);
    if (contact.msg === "Contact Updated") {
      setData({
        contact: newData,
      });
    }
  };

  return (
    <div className="flex-column">
      <h3>Contact Info</h3>
      <p>Find me on</p>
      <div className="flex-horizontal">
        {[...data.contact].map((contact, index) => (
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
              Delete
            </button>
          </form>
        ))}
        <ContactForm onSubmit={(e) => submitNewContact(e)} />
      </div>
    </div>
  );
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
  onSubmit: propTypes.func,
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
