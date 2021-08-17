import { DataType } from "../types";

export function validateCreateForm(data: DataType): boolean {
  const dataToValidate = {
    title: data.title.trim(),
    data: data.data.trim(),
  };

  if (dataToValidate.title === undefined || dataToValidate.title === "") {
    return false;
  } else if (dataToValidate.data.length < 1) {
    return false;
  } else {
    return true;
  }
}
