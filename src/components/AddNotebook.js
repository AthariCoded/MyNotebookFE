import notebookStore from "../store/notebookStore";
import { Wrapper } from "../styles";
import { useState } from "react";

const AddNotebook = () => {
  const [notebook, setNotebook] = useState({
    name: "",
  });

  const handleChange = (event) => {
    setNotebook({ ...notebook, [event.target.name]: event.target.value });
    console.log(notebook);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    notebookStore.notebookCreate(notebook);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Enter a notebook name..."
            onChange={handleChange}
            name="name"
            value={notebook.name}
            aria-label="notebook name"
            aria-describedby="button-addon2"
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
export default AddNotebook;
