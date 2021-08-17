import { Note, NoteReducer } from "../../types";

const noteReducer = (state: Note[] = [], action: NoteReducer) => {
  switch (action.type) {
    case "ADD_NOTE":
      return [...state, action.payload];

    case "REMOVE_NOTE":
      return state;

    case "UPDATE_NOTE":
      return state;

    default:
      return state;
  }
};

export default noteReducer;
