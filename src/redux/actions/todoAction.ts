import { Todo, TodoReducer } from "../../types";

export const addTodo = (note: Todo): TodoReducer => ({
  type: "ADD_TODO",
  payload: note
});

export const updateTodo = (note: Todo): TodoReducer => ({
  type: "UPDATE_TODO",
  payload: note
});

export const deleteTodo = (note: Todo): TodoReducer => ({
  type: "REMOVE_TODO",
  payload: note
});
