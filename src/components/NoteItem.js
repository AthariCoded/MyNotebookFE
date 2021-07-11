import { Wrapper } from "../styles";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import UpdateButton from "./button/UpdateButton";

const NoteItem = (props) => {
  return (
    <Wrapper>
      <h3>
        <Link to={`/notes/${props.note.slug}`}>
          <Wrapper>{props.note.title}</Wrapper>
        </Link>
      </h3>
      <Wrapper>
        <h2> {props.note.body}</h2>

        <UpdateButton note={props.note} />
      </Wrapper>
    </Wrapper>
  );
};

export default observer(NoteItem);
