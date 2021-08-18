import { Note, Todo } from "../../types";

type SaveStateParams = {
  notes: Array<Note>;
  todos: Array<Todo>;
};

export default function saveState(state: SaveStateParams) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("todo_app-state", serializedState);
  } catch (error) {
    console.error(error);
  }
}
