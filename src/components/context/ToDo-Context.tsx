import { createContext } from "react";
import { CreateDataType, CreationProps, DataType } from "../../types";

type data = { title: string; data: string } | {};

interface ToDosProps {
  generalData: any[];
  setGeneralData: React.Dispatch<React.SetStateAction<string[]>>;
  createNote: boolean;
  setCreateNote: React.Dispatch<React.SetStateAction<boolean>>;
  createTodo: boolean;
  setCreateTodo: React.Dispatch<React.SetStateAction<boolean>>;
  newCreation: CreationProps;
  setNewCreation: React.Dispatch<React.SetStateAction<CreationProps>>;
  handleNewCreation: (props: CreationProps) => void;
  data: <T extends DataType>() => CreateDataType<T>;
  setData: React.Dispatch<React.SetStateAction<data>>;
}

export const TODO_CONTEXT = createContext<ToDosProps>({} as ToDosProps);
