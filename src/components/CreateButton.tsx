import { Link, useHistory } from "react-router-dom";
import { ImageButton } from "../images/image-button";
import { TodoTaskButton } from "../images/todo-task-button";

export const CreateButton = () => {
  const history = useHistory();

  return (
    <div className="create-note">
      <input
        type="text"
        placeholder="Crear una nota..."
        onClick={() => history.push("/create/note")}
      />
      <div className="option-buttons">
        <Link className="todo-button option-button" to="/create/todo">
          <TodoTaskButton />
        </Link>
        <Link className="create-button option-button" to="/create">
          <ImageButton />
        </Link>
      </div>
    </div>
  );
};
