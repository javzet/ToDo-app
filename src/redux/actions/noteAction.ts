import { Note, NoteReducer } from "../../types";

export const addNote = (note: Note): NoteReducer => ({
  type: "ADD_NOTE",
  payload: note,
});

export const updateNote = (note: Note): NoteReducer => ({
  type: "UPDATE_NOTE",
  payload: note,
});

export const deleteNote = (note: Note): NoteReducer => ({
  type: "REMOVE_NOTE",
  payload: note,
});
