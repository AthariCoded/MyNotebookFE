import { useState } from "react";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import SearchBar from "./SearchBar";
import { ListWrapper, Wrapper } from "../styles";
import { observer } from "mobx-react";

const NoteList = ({ notes, notebook }) => {
  const [query, setQuery] = useState("");

  const noteList = notes
    .filter((note) => note.title.toLowerCase().includes(query.toLowerCase()))
    .map((note) => <NoteItem note={note} key={note.id} notebook={notebook} />);
  return (
    <div>
      <Wrapper>Note List</Wrapper>
      <SearchBar setQuery={setQuery} />
      <AddNote notebook={notebook} />
      <ListWrapper>{noteList}</ListWrapper>
    </div>
  );
};

export default observer(NoteList);
