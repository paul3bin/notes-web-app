import React, { useState } from "react";
import { API } from "../Api";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { config } from "../contents/editorConfig";

export function NotesList(props) {
  ClassicEditor.defaultConfig = config;

  const [titleEditable, setTitleEditable] = useState("title_state");
  const [bodyEditable, setBodyEditable] = useState("body_state");
  const [idEditable, setIdEditable] = useState("");

  const [noteToBeRemoved, setNoteToBeRemoved] = useState("");

  const updateNote = () => {
    console.log("updated");
  };

  const deleteNote = () => {
    console.log(noteToBeRemoved);
  };

  const noteItem =
    props.notes &&
    props.notes.map((note) => {
      return (
        <tr key={note.id}>
          <td>{note.id}</td>
          <td>{note.title}</td>
          <td>{note.created_on}</td>
          <td>{note.last_updated}</td>
          <td>
            <div>
              <div className="btn-group me-2">
                <button
                  type="button"
                  className="btn btn-outline-dark btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => [
                    setTitleEditable(note.title),
                    setBodyEditable(note.body),
                    setIdEditable(note.id),
                  ]}
                >
                  View
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => console.log(note)}
                >
                  Delete
                </button>
              </div>
              <div
                className="modal fade"
                id="exampleModal"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                {/* Update modal */}
                <div className="modal-dialog modal-lg modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        <input
                          type="text"
                          placeholder="Note Title"
                          className="form-control"
                          value={titleEditable}
                          onChange={(evt) => setTitleEditable(evt.target.value)}
                        />
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <CKEditor
                        editor={ClassicEditor}
                        data={bodyEditable}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          setBodyEditable(data);
                        }}
                      />
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={updateNote}
                        data-bs-dismiss="modal"
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      );
    });

  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Date Added</th>
            <th>Last Updated</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>{noteItem}</tbody>
      </table>
    </div>
  );
}
