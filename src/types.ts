import { FC } from "react";
import { RouteProps } from "react-router-dom";

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

export type NoteReducer = {
  type: NoteReducerType;
  payload: Note;
};

export type TodoReducer = {
  type: TodoReducerType;
  payload: Todo;
};

export type AuthReducer = {
  type: AuthReducerType;
  payload: AuthState;
};

export type UserStoreState = {
  name: string;
  id: string;
  token: string;
};

export interface AuthState {
  isAuthenticated: boolean;
  user: UserStoreState | null;
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

export interface ProtectedRouteProps extends RouteProps {
  isAuthenticated: boolean;
  component: FC;
}
