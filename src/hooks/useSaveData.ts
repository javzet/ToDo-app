import { CreateDataType, DataStorage, DataType } from "../types";

export const saveData = <T extends DataType>(
  data: CreateDataType<T>,
  type: "notes" | "todos"
) => {
  let dataStored = localStorage.getItem("dataStored");

  if (dataStored === null) {
    let dataToStore: DataStorage<T> = {
      notes: [],
      todos: [],
    };

    dataToStore[type] = [...dataToStore[type], data];
    localStorage.setItem("dataStored", JSON.stringify(dataToStore));
  } else {
    let dataRecovered: DataStorage<T> = JSON.parse(dataStored);

    dataRecovered[type] = [...dataRecovered[type], data];
    localStorage.setItem("dataStored", JSON.stringify(dataRecovered));
  }
};
