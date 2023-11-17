import React from "react";
import noteContext from "../context/notes/noteContext";
import { useContext } from "react";
import { useState } from "react";

export const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({title: "", description: "", tag: ""}) 
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({title: "", description: "", tag: ""})
    props.showAlert("Your Note is Added Successfully", "success");
  }

  const onChange = (e) => {
    setNote({...note, [e.target.name]: e.target.value})
  }

  return (
    <>
      <div className="container mt-4">
        <h1>Add your notes here:-</h1>
        <form>
          <div className="mb-3 my-4">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              value={note.title}
              onChange={onChange}/>
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={note.description}
              onChange={onChange}/>
          </div>

          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              value={note.tag}
              onChange={onChange}/>
          </div>
          {/* <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="f backend orm-check-input mx-2"
              id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1"> Check me out
            </label>
          </div>*/}
          <button disabled={note.title.length<5 || note.description.length<5}
            type="submit"
            className="btn btn-primary my-2"
            onClick={handleClick}> Add Note
          </button> 
        </form>
      </div>
    </>
  );
};
export default AddNote;