import { makeAutoObservable } from "mobx";
import axios from "axios";

class NoteStore {
  notes = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchNotes = async () => {
    try {
      const response = await axios.get("http://localhost:8000/notes");
      this.notes = response.data;
      this.loading = false;
    } catch (error) {
      console.error("fetchnotes: ", error);
    }
  };

  noteCreate = async (newNote, notebook) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/notebooks/${notebook.id}/notes`,
        newNote
      );
      this.notes.push(response.data);
      notebook.notes.push({ id: response.data.id });
    } catch (error) {
      console.error(error);
    }
  };

  getNoteById = (noteId) => this.notes.find((note) => note.id === noteId);

  noteUpdate = async (updateNote) => {
    try {
      const respose = await axios.put(
        `http://localhost:8000/notes/${updateNote.id}`,
        updateNote
      );

      const note = this.notes.find((note) => note.id === respose.data.id);
      for (const key in note) note[key] = respose.data[key];
    } catch (error) {
      console.error(error);
    }
  };
}

const noteStore = new NoteStore();
noteStore.fetchNotes();
export default noteStore;
