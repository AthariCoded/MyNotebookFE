import { makeAutoObservable } from "mobx";
import axios from "axios";

class NotebookStore {
  notebooks = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchNotebooks = async () => {
    try {
      const response = await axios.get("http://localhost:8000/notebooks");
      this.notebooks = response.data;
      this.loading = false;
    } catch (error) {
      console.error("fetchNotebooks: ", error);
    }
  };

  notebookCreate = async (newNotebook) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/notebooks",
        newNotebook
      );
      response.data.notes = [];
      this.notebooks.push(response.data);
    } catch (error) {
      console.error(error);
    }
  };
}

const notebookStore = new NotebookStore();
notebookStore.fetchNotebooks();

export default notebookStore;
