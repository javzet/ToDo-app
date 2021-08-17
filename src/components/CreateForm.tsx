import { useContext, useEffect } from "react";
import { v4 as uuid } from "uuid";

import { TODO_CONTEXT } from "../context/ToDo-Context";

import { useForm } from "../hooks/useForm";

import { saveData } from "../helpers/saveData";
import { validateCreateForm } from "../helpers/validateForm";

import { TimesCircleIcon } from "../images/times-circle-icon";
import { ReturnIcon } from "../images/return-icon";

import { ActionType } from "../types";
import { useHistory } from "react-router-dom";

export const CreateForm = (props: { type: ActionType }) => {
  const { noteTitle, noteText, onInputChange, onReset, state } = useForm({
    noteTitle: "",
    noteText: "",
  });

  const history = useHistory();

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
      const validData = validateCreateForm(data);
      if (validData === true) {
        saveData(data);
        onReset();
        history.push("/");
      }
    } else {
      onReset();
      history.push("/");
    }
  };

  useEffect(() => {
    console.log({ state });
  }, [state]);

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
