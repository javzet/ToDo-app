import { Todo, TodoReducer } from "../../types";

const todoReducer = (state: Todo[] = [], action: TodoReducer) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];

    case "UPDATE_TODO":
      return state;

    case "REMOVE_TODO":
      return state;

    default:
      return state;
  }
};

export default todoReducer;
