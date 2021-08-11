import { useContext } from "react";
import { v4 as uuid } from "uuid";
import { saveData } from "../helpers/saveData";
import { useForm } from "../hooks/useForm";
import { ReturnIcon } from "../images/return-icon";
import { TimesCircleIcon } from "../images/times-circle-icon";
import { ActionType } from "../types";
import { TODO_CONTEXT } from "./context/ToDo-Context";

export const CreateForm = (props: { type: ActionType }) => {
  const { noteTitle, noteText, onInputChange, onReset } = useForm({
    noteTitle: "",
    noteText: "",
  });

  const todoContext = useContext(TODO_CONTEXT);

  const handleActionClick = (
    actionType: ActionType,
    action: "save" | "cancel"
  ) => {
    if (action === "save") {
      const data = {
        title: noteTitle,
        data: noteText,
        type: actionType,
        id: uuid(),
      };
      todoContext.setGeneralData([...todoContext.generalData, data]);
      saveData(data);
      todoContext.setNewCreation({ type: "", active: false });
      onReset();
    } else {
      todoContext.setNewCreation({ type: "", active: false });
    }
  };

  return (
    <div className="create-form">
      <input
        type="text"
        placeholder="Escribe un título"
        value={noteTitle}
        onChange={({ target: { value } }) => onInputChange(value, "noteTitle")}
      />
      <textarea
        name=""
        placeholder={
          props.type === "notes"
            ? "Escribe una nota..."
            : "Escribe una lista de tareas..."
        }
        value={noteText}
        onChange={({ target: { value } }) => onInputChange(value, "noteText")}
      ></textarea>
      <div className="tool-buttons">
        <button
          className="tool-button"
          onClick={() => handleActionClick(props.type, "save")}
        >
          <ReturnIcon />
          <span>Guardar {props.type === "notes" ? "nota" : "lista"}</span>
        </button>
        <button
          className="tool-button"
          onClick={() => handleActionClick(props.type, "cancel")}
        >
          <TimesCircleIcon />
          <span>Descartar {props.type === "notes" ? "nota" : "lista"}</span>
        </button>
      </div>
    </div>
  );
};
