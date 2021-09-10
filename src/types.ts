import { FC } from "react";
import { RouteProps } from "react-router-dom";
import { ErrorForm } from "./Models/AuthError";

export type CreationProps = {
  active: boolean;
  type: "todo" | "note" | "image" | "";
  data?: any;
};

export type TodoTask = { completed: boolean; task: string };

export type ActionType = "note" | "todo";

export type DataType = {
  title: string;
  data: string;
  type: ActionType;
  id: string;
};

export type ElementList<E extends HTMLElement> = Array<E | null>;

export type NoteReducerType = "ADD_NOTE" | "REMOVE_NOTE" | "UPDATE_NOTE";
export type TodoReducerType = "ADD_TODO" | "REMOVE_TODO" | "UPDATE_TODO";
export type AuthReducerType = "LOGIN" | "LOGOUT" | "REGISTER";
export type UIReducerType = "SET_ERROR" | "CLEAR_ERROR" | "CLEAR_ALL_ERRORS" | "SET_ERRORS";

export type UserStoreState = {
  name: string;
  id: string;
  token: string;
};

export interface authState {
  isAuthenticated: boolean;
  name: string;
  token: string;
}

export type LoginCredentials = {
  email: string;
  password: string;
};

export type RegisterCredentials = {
  nombre: string;
  email: string;
  password: string;
};

interface Create {
  title: string;
  localId?: string;
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

export interface ProtectedRouteProps extends RouteProps {
  isAuthenticated: boolean;
  component: FC;
}

export type NoteReducer = {
  type: NoteReducerType;
  payload: Note;
};

export type TodoReducer = {
  type: TodoReducerType;
  payload: Todo;
};

export type ActionAuth = {
  type: AuthReducerType;
  payload: authState;
};

export interface Error {
  identifier: string;
  error: string;
}

export interface actionAuthError {
  type: UIReducerType;
  payload: ErrorForm[];
}

export type authErrorState = ErrorForm[];

export interface TodoStateStored {
  notes: Array<Note>;
  todos: Array<Todo>;
  auth: authState;
}

export interface TodoState extends TodoStateStored {
  errors: ErrorForm[];
}
