import { useContext } from "react";
import { useEffect } from "react";
import { useForm } from "../hooks/useForm";
import { TODO_CONTEXT } from "./context/ToDo-Context";

export const CreateNote = () => {
  const { noteTitle, noteText, onInputChange, state } = useForm({
    noteTitle: "",
    noteText: "",
  });

  const context = useContext(TODO_CONTEXT);

  useEffect(() => {
    context?.setData({ title: state.noteTitle, data: state.noteText });
  }, [state]);

  return (
    <form className="create-form">
      <input
        type="text"
        placeholder="Escribe un título"
        value={noteTitle}
        onChange={({ target: { value } }) => onInputChange(value, "noteTitle")}
      />
      <textarea
        name=""
        placeholder="Escribe una nota..."
        value={noteText}
        onChange={({ target: { value } }) => onInputChange(value, "noteText")}
      ></textarea>
    </form>
  );
};
