import { useForm } from "../../hooks/useForm";
import { validateNoteForm } from "../../helpers/validateForm";
import { Note } from "../../types";
import { useHistory } from "react-router-dom";
import { addNote } from "../../redux/actions/noteAction";
import { useDispatch } from "react-redux";
import { CreateFormTools } from "./CreateFormTools";

export const CreateNoteForm = () => {
  const { noteTitle, noteText, onInputChange, onReset } = useForm({
    noteTitle: "",
    noteText: ""
  });

  const dispatch = useDispatch();

  const history = useHistory();

  const handleSubmit = (action: "save" | "cancel") => {
    if (action === "save") {
      const data: Note = {
        title: noteTitle,
        data: noteText,
        type: "note"
      };
      const isValidData = validateNoteForm(data);
      if (isValidData) {
        dispatch(addNote(data));
        onReset();
        history.push("/");
      }
    } else {
      onReset();
      history.push("/");
    }
  };

  // useEffect(() => {
  //   console.log({ state });
  // }, [state]);

  return (
    <div className="create-form">
      <input
        type="text"
        className="create-form-title"
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
      <CreateFormTools handleActionClick={handleSubmit} type="note" />
    </div>
  );
};
