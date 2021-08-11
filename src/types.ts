export type CreationProps = {
  active: boolean;
  type: "todo" | "note" | "image" | "";
  data?: any;
};

export type TodoTask = { completed: boolean; task: string };

export type DataType = string | Array<TodoTask>;

export type CreateDataType<T extends DataType> = {
  title: string;
  data: T;
};

export type DataStorage<T extends DataType> = {
  notes: Array<CreateDataType<T>>;
  todos: Array<CreateDataType<T>>;
};
