type SaveStateParams = {};

export default function saveState(state: any) {
  console.log(state);
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("todo_app-state", serializedState);
  } catch (error) {
    console.error(error);
  }
}
