import Modal from "react-modal";
import { CreateButtonStyled } from "../../styles";
//state
import { useState } from "react";

import noteStore from "../../store/noteStore";

//import { styles } from "ansi-colors";

const NoteModal = (props) => {
  const [note, setNote] = useState(props.note);

  const handleChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    noteStore.noteUpdate(note);
    props.closeModal();
  };
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        contentLabel="Note Modal"
      >
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <div className="col-6">
              <label>Name</label>
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                name="name"
                value={note.title}
              />
            </div>

            <textarea
              name="body"
              onChange={handleChange}
              placeholder="Write your note..."
            />
          </div>

          <CreateButtonStyled>Update</CreateButtonStyled>
        </form>
      </Modal>
    </div>
  );
};

export default NoteModal;
/*
 <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        contentLabel="Note Modal"
      >
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
          </div>
          <CreateButtonStyled>Update</CreateButtonStyled>
        </form>
      </Modal>
*/
