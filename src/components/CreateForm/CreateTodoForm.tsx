import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validateTodoForm } from "../../helpers/validateForm";
import { useForm } from "../../hooks/useForm";
import { TodoTask } from "../../types";
import { CreateFormTools } from "./CreateFormTools";

export const CreateTodoForm = () => {
  const [tasks, setTasks] = useState<TodoTask[]>([]);
  const { todoListTitle, todoTask, onInputChange, onResetField, state } =
    useForm({
      todoListTitle: "",
      todoTask: "",
    });

  const handleAddTask = () => {
    setTasks([...tasks, { task: todoTask, completed: false }]);
    validateTodoForm({ title: todoListTitle, type: "todo", data: tasks });
    // onResetField("todoTask");
  };

  // const dispatch = useDispatch();

  useEffect(() => {
    console.table(state);
  }, [state]);

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
          <li>{JSON.stringify(task)}</li>
        ))}
      </ul>
      {/* <CreateFormTools handleActionClick={handleActionClick} type="todo" /> */}
    </div>
  );
};
