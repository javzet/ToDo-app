import { TodoState } from "../../types";

type SaveStateParams = TodoState;

export default function saveState(state: SaveStateParams) {
  try {
    const serializedState = JSON.stringify({ notes: state.notes, todos: state.todos, auth: state.auth });
    localStorage.setItem("todo_app-state", serializedState);
  } catch (error) {
    console.error(error);
  }
}
