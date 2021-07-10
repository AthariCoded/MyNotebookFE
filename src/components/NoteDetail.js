// MobX
import noteStore from "../store/noteStore";
import { observer } from "mobx-react";

//styles
import { DetailWrapper } from "../styles";

//import DeleteButton from "./buttons/DeleteButton";
// Libraries
import { useParams, Redirect, Link } from "react-router-dom";

const NoteDetail = () => {
  const noteSlug = useParams().noteSlug;
  const note = noteStore.notes.find((note) => note.slug === noteSlug);

  // if the note is undefined
  //    redirect to the list page
  if (!note) return <Redirect to="/notes" />;
  return (
    <DetailWrapper>
      <p>{note.title}</p>
      <p>{note.body}</p>

      {/*<DeleteButton noteId={note.id} /> */}
      <Link to="/notes">
        <button>Back</button>
      </Link>
    </DetailWrapper>
  );
};

export default observer(NoteDetail);
