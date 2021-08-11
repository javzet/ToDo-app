import { useContext } from "react";
import { ImageButton } from "../images/image-button";
import { TodoTaskButton } from "../images/todo-task-button";
import { TODO_CONTEXT } from "./context/ToDo-Context";

export const CreateButton = () => {
  const context = useContext(TODO_CONTEXT);

  const handleCreateNoteButton = () => {
    context?.handleNewCreation({ type: "note", active: true });
  };

  const handleCreateTodoButton = () => {
    context?.handleNewCreation({ type: "todo", active: true });
  };

  return (
    <div className="create-note">
      <input
        type="text"
        placeholder="Crear una nota..."
        onClick={handleCreateNoteButton}
      />
      <div className="option-buttons">
        <div className="todo-button" onClick={handleCreateTodoButton}>
          <TodoTaskButton />
        </div>
        <div className="create-button">
          <ImageButton />
        </div>
      </div>
    </div>
  );
};
