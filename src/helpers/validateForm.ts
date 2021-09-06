import { Note, Todo } from "../types";

export function validateNoteForm(data: Note): boolean {
  const dataToValidate = {
    title: data.title.trim(),
    data: data.data.trim()
  };

  if (dataToValidate.title === undefined || dataToValidate.title === "") {
    return false;
  } else if (dataToValidate.data.length < 1) {
    return false;
  } else {
    return true;
  }
}

export function validateTodoForm(data: Todo): boolean {
  const dataToValidate = {
    title: data.title.trim(),
    data: data.data.map((d) => d.task.trim())
  };

  const validateTaks = (tasks: string[]) => {
    return tasks.filter((task) => task.length < 1);
  };

  if (dataToValidate.title === undefined || dataToValidate.title === "") {
    return false;
  } else if (validateTaks(dataToValidate.data).length > 0) {
    return false;
  } else {
    return true;
  }
}
