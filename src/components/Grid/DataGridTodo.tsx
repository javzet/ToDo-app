import { Todo } from "../../types";

export const DataGridTodo = ({ title, data: todos, id }: Todo) => {
  return (
    <div className="data-grid-item todo" data-data={id}>
      <span>{title}</span>
      <ul>
        {todos.length > 3
          ? todos.slice(0, 4).map((todo, index) => <li key={index}>{todo}</li>)
          : todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>
    </div>
  );
};
