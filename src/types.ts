import { type } from "os";

export type CreationProps = {
  active: boolean;
  type: "todo" | "note" | "image" | "";
  data?: any;
};

export type TodoTask = { completed: boolean; task: string };

export type ActionType = "notes" | "todos";

export type DataType = {
  title: string;
  data: string;
  type: ActionType;
  id: string;
};

export type ElementList<E extends HTMLElement> = Array<E | null>;

export type NoteReducerType = "ADD_NOTE" | "REMOVE_NOTE" | "UPDATE_NOTE";
export type TodoReducerType = "ADD_TODO" | "REMOVE_TODO" | "UPDATE_TODO";

export type NoteReducer = {
  type: NoteReducerType;
  payload: Note;
};

export type TodoReducer = {
  type: TodoReducerType;
  payload: Todo;
};

interface Create {
  title: string;
  local_id?: string;
  id?: string;
}

export interface Note extends Create {
  type: "note";
  data: string;
}

export interface Todo extends Create {
  type: "todo";
  data: TodoTask[];
}
