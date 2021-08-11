import { createContext } from "react";
import { DataType } from "../../types";

interface ToDosProps {
  generalData: DataType[];
  setGeneralData: React.Dispatch<React.SetStateAction<any[]>>;
  newCreation: { type: "notes" | "todos" | ""; active: boolean };
  setNewCreation: React.Dispatch<
    React.SetStateAction<{ type: "notes" | "todos" | ""; active: boolean }>
  >;
}

export const TODO_CONTEXT = createContext<ToDosProps>({} as ToDosProps);
