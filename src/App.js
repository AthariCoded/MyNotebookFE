import NotebookList from "./components/NotebookList";
import NotebookDetail from "./components/NotebookDetail";
import NoteList from "./components/NoteList";
import NoteDetail from "./components/NoteDetail";
import noteStore from "./store/noteStore";
import { observer } from "mobx-react";

import { Route, Switch } from "react-router";
//styles
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";
//components
import NavBar from "./components/NavBar";
import Home from "./components/Home";

const theme = {
  mainColor: "#586f6b",
  backgroundColor: "#cfc0bd",
  red: "red",
};

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NavBar />
        <Switch>
          <Route path="/notes/:noteSlug">
            <NoteDetail />
          </Route>
          <Route path="/notes">
            <NoteList notes={noteStore.notes} />
          </Route>
          <Route path="/notebooks/:notebookSlug">
            <NotebookDetail />
          </Route>
          <Route path="/notebooks">
            <NotebookList />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default observer(App);
