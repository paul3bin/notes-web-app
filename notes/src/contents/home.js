import React, { useEffect, useState } from "react";
import PrivateNav from "../components/PrivateNav";

import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { config } from "./editorConfig";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { NotesList } from "../components/notesList";
import { API } from "../Api";

import "../styles/home.css";

export function Home(props) {
  document.title = "Notes | Home";

  const history = useHistory();

  const [body, setBody] = useState("<p>Type your notes here!</p>");
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState([]);

  const [userID, setUserID] = useCookies(["uid"]);
  const [token, setToken] = useCookies(["token"]);

  ClassicEditor.defaultConfig = config;

  // useEffect(() => {
  //   if (!token["token"]) history.push("/");
  // }, [token]);

  useEffect(() => {
    API.getNotes(token["token"]).then((resp) => setNotes(resp));
  }, []);

  const updateNoteListAction = (note) => {
    const updatedNoteList = notes.filter((n) => n.id !== note.id);
    const newUpdatedNoteList = [...updatedNoteList, note];
    setNotes(newUpdatedNoteList);
  };

  const deleteNoteAction = (note) => {
    const updatedNoteList = notes.filter((n) => n.id !== note.id);
    setNotes(updatedNoteList);
    toast.success("Note Deleted!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const saveNoteClicked = () => {
    if (title.length === 0) {
      toast.error("Title cannot be empty!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      API.addNewNote(
        { title: title, body: body, user: userID["uid"] },
        token["token"]
      )
        .then((resp) => [
          setNotes([...notes, resp]),
          setTitle(""),
          setBody("<p>Type your notes here!</p>"),
        ])
        .catch((error) => console.log(error));
    }
  };

  const closeModalClicked = () => {
    setBody("<p>Type your notes here!</p>");
    setTitle("");
  };

  return (
    <div>
      <ToastContainer />
      <PrivateNav />
      <div class="container-fluid bg-light">
        <div class="row">
          <div className="row">
            <h3 className="col">Your Notes</h3>
            <div class="btn-toolbar mb-2 mb-md-0 col p-2 justify-content-end">
              <div className="btn-group me-2">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  New Note
                </button>
                <div
                  className="modal fade"
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  {/* Modal Editor */}
                  <div className="modal-dialog modal-lg modal-dialog-scrollable">
                    <div className="modal-content">
                      <div className="modal-header">
                        {/* Note title */}
                        <h5 className="modal-title" id="staticBackdropLabel">
                          <input
                            type="text"
                            placeholder="Note Title"
                            className="form-control"
                            value={title}
                            onChange={(evt) => setTitle(evt.target.value)}
                          />
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          onClick={closeModalClicked}
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      {/* Note Body */}
                      <div className="modal-body">
                        <CKEditor
                          editor={ClassicEditor}
                          data={body}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            setBody(data);
                          }}
                        />
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={saveNoteClicked}
                          data-bs-dismiss="modal"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Main Table */}
          <NotesList
            notes={notes}
            updateNoteList={updateNoteListAction}
            deleteNote={deleteNoteAction}
          />
        </div>
      </div>
    </div>
  );
}
