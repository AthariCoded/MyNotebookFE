//state
import { useState } from "react";

//styles
import { Wrapper } from "../styles";

import noteStore from "../store/noteStore";

const AddNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    body: "",
  });

  const handleChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
    console.log(note);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    noteStore.noteCreate(note, props.notebook);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Enter a note..."
            onChange={handleChange}
            name="title"
            value={note.title}
            aria-label="note title"
            aria-describedby="button-addon2"
          />
          <textarea
            name="body"
            onChange={handleChange}
            placeholder="Enter a description..."
          />

          <button
            class="btn btn-outline-secondary"
            type="submit"
            id="button-addon2"
          >
            Add+
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddNote;
