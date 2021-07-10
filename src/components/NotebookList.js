import { useState } from "react";
import { observer } from "mobx-react";
import notebookStore from "../store/notebookStore";
import { Title } from "../styles";
import AddNotebook from "./AddNotebook";

// Components
import NotebookItem from "./NotebookItem";
import SearchBar from "./SearchBar";

const NotebookList = () => {
  const [query, setQuery] = useState("");

  const notebooks = notebookStore.notebooks
    .filter((notebook) =>
      notebook.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((notebook) => <NotebookItem notebook={notebook} />);
  return (
    <div className="container">
      <Title>Notebooks</Title>
      <SearchBar setQuery={setQuery} />
      <AddNotebook />
      {notebooks}
    </div>
  );
};

export default observer(NotebookList);
