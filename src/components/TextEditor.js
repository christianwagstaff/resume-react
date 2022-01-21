import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import PropTypes from "prop-types";
import fetchAPI from "../functions/fetchAPI";

const TextEditor = (props) => {
  const editorRef = useRef(null);
  const [dirty, setDirty] = useState(false);
  useEffect(() => setDirty(false), [props.initialValue]);
  const save = async () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      setDirty(false);
      editorRef.current.setDirty(false);
      // Add Fetch To save data in DB
      if (props.onSave) {
        props.onSave(content);
      } else {
        const objName = props.objName;
        const data = { [objName]: content, id: props.id };
        const response = await fetchAPI(props.src, props.type, data);
        console.log(response);
      }
    }
  };
  return (
    <>
      {dirty && <p className="font-small">You have unsaved content!</p>}
      <Editor
        apiKey="p00ee6zalc10gzda4aot663g3yzcgenejz65f71fefvnwstg"
        initialValue={props.initialValue ? props.initialValue : ""}
        onDirty={() => setDirty(true)}
        onInit={(evt, editor) => (editorRef.current = editor)}
        init={{
          height: props.height,
          inline: props.inline || false,
          placeholder: props.placeholder ? props.placeholder : null,
          menubar: false,
          encoding: "xml",
          plugins: [
            "advlist autolink lists link image",
            "charmap print preview anchor help",
            "searchreplace visualblocks code",
            "insertdatetime media table paste wordcount autoresize",
          ],
          toolbar:
            "undo redo | fontselect fontsizeselect |  formatselect | bold italic underline| \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help",
          valid_elements: "strong,em,span[style],a[href]",
          valid_styles: {
            "*": "font-size,font-family,color,text-decoration,text-align",
          },
        }}
      />
      {dirty && (
        <button onClick={() => save()} disabled={!dirty} className="font-small">
          Save
        </button>
      )}
    </>
  );
};

TextEditor.propTypes = {
  initialValue: PropTypes.any,
  height: PropTypes.number,
  inline: PropTypes.bool,
  placeholder: PropTypes.any,
  src: PropTypes.string,
  objName: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  onSave: PropTypes.func,
};

export default TextEditor;
