import { Wrapper } from "../styles";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

const NoteItem = (props) => {
  return (
    <Wrapper>
      <Link to={`/notes/${props.note.slug}`}>
        <Wrapper>{props.note.title}</Wrapper>
      </Link>
      <Wrapper>{props.note.body}</Wrapper>
    </Wrapper>
  );
};

export default observer(NoteItem);
