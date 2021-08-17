export default function loadStore() {
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
