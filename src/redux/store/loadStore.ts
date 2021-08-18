import { Note, Todo } from "../../types";

type LoadState = {
  notes: Array<Note>;
  todos: Array<Todo>;
};

export default function loadStore(): LoadState | {} {
  try {
    const serializedState = localStorage.getItem("todo_app-state");
    if (serializedState === null) {
      return {};
    } else {
      return JSON.parse(serializedState);
    }
  } catch (error) {
    console.error(error);
    return {};
  }
}
