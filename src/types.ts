export type CreationProps = {
  active: boolean;
  type: "todo" | "note" | "image" | "";
  data?: any;
};

export type TodoTask = { completed: boolean; task: string };

export type ActionType = "notes" | "todos";

export type DataType = {
  title: string;
  data: string;
  type: ActionType;
  id: string;
};

export type ElementList<E extends HTMLElement> = Array<E | null>;
