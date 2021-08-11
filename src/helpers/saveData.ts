import { DataType } from "../types";

export const saveData = <T extends DataType>(data: DataType) => {
  let dataStored = localStorage.getItem("dataStored");

  if (dataStored === null) {
    let dataToStore: DataType[] = [];

    dataToStore = [...dataToStore, data];
    localStorage.setItem("dataStored", JSON.stringify(dataToStore));
  } else {
    let dataRecovered: DataType[] = JSON.parse(dataStored);

    dataRecovered = [...dataRecovered, data];
    localStorage.setItem("dataStored", JSON.stringify(dataRecovered));
  }
};
