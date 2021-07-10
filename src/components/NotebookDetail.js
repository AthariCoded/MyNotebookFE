import { useParams } from "react-router";
import notebookStore from "../store/notebookStore";
import noteStore from "../store/noteStore";
import { DetailWrapper } from "../styles";
import NoteList from "./NoteList";
import { observer } from "mobx-react";

const NotebookDetail = () => {
  const { notebookSlug } = useParams();
  const notebook = notebookStore.notebooks.find(
    (notebook) => notebook.slug === notebookSlug
  );

  const notes = notebook.notes.map((note) => noteStore.getNoteById(note.id));

  return (
    <div>
      <DetailWrapper>
        <h4>{notebook.name}</h4>
      </DetailWrapper>
      <NoteList notes={notes} notebook={notebook} />
    </div>
  );
};

export default observer(NotebookDetail);
