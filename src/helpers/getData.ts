export const getData = () => {
  const data = localStorage.getItem("dataStored");
  if (data !== null) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
