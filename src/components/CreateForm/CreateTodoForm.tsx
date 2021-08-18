import { useState } from "react";
import { useDispatch } from "react-redux";
import { validateTodoForm } from "../../helpers/validateForm";
import { useForm } from "../../hooks/useForm";
import { Todo, TodoTask } from "../../types";
import { CreateFormTools } from "./CreateFormTools";
import { v4 as uuid } from "uuid";
import { addTodo } from "../../redux/actions/todoAction";
import { useHistory } from "react-router-dom";

export const CreateTodoForm = () => {
  const [tasks, setTasks] = useState<TodoTask[]>([]);
  const { todoListTitle, todoTask, onInputChange, onResetField, onReset } =
    useForm({
      todoListTitle: "",
      todoTask: "",
    });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddTask = () => {
    if (todoTask.trim().length > 0) {
      setTasks([...tasks, { task: todoTask, completed: false }]);
    }
    onResetField("todoTask");
  };

  const handleSubmit = (action: "save" | "cancel") => {
    if (action === "save") {
      const data: Todo = {
        title: todoListTitle,
        type: "todo",
        data: tasks,
      };
      const isValidData = validateTodoForm(data);
      if (isValidData) {
        dispatch(addTodo(data));
        onReset();
        history.push("/");
      }
    } else {
      onReset();
      history.push("/");
    }
  };

  return (
    <div className="create-form">
      <input
        type="text"
        className="create-form-title"
        placeholder="Escribe un título"
        value={todoListTitle}
        onChange={({ target: { value } }) =>
          onInputChange(value, "todoListTitle")
        }
      />
      <input
        type="text"
        placeholder="Escribe una tarea..."
        value={todoTask}
        onChange={({ target: { value } }) => onInputChange(value, "todoTask")}
      />
      <button onClick={handleAddTask}>Agregar tarea</button>
      <ul className="tasks-list">
        {tasks.map((task) => (
          <li key={uuid()}>{JSON.stringify(task)}</li>
        ))}
      </ul>
      <CreateFormTools handleActionClick={handleSubmit} type="todo" />
    </div>
  );
};
