import { v4 as uuid } from "uuid";
import { useForm } from "../../hooks/useForm";
import { validateNoteForm } from "../../helpers/validateForm";
import { ActionType } from "../../types";
import { useHistory } from "react-router-dom";
import { addNote } from "../../redux/actions/noteAction";
import { useDispatch } from "react-redux";
import { CreateFormTools } from "./CreateFormTools";

export const CreateNoteForm = () => {
  const { noteTitle, noteText, onInputChange, onReset } = useForm({
    noteTitle: "",
    noteText: "",
  });

  const dispatch = useDispatch();

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
      const validData = validateNoteForm(data);
      if (validData === true) {
        dispatch(
          addNote({
            title: data.title,
            data: data.data,
            type: "note",
            id: data.id,
          })
        );
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
      <CreateFormTools handleActionClick={handleActionClick} type="note" />
    </div>
  );
};
