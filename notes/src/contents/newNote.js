import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { config } from "./editorConfig";

export function NewNote() {
  const [data, setData] = useState("");
  ClassicEditor.defaultConfig = config;
  return (
    <div className="App">
      <h2>New Note</h2>
      <CKEditor
        editor={ClassicEditor}
        data="<p>Type your notes here!</p>"
        onChange={(event, editor) => {
          const data = editor.getData();
          setData(data);
        }}
      />
      <button className="btn btn-primary" onClick={() => console.log(data)}>
        Submit
      </button>
    </div>
  );
}
