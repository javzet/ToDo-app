import { Note } from "../../types";

export const DataGridNote = ({ title, data: note, id }: Note) => {
  return (
    <div className="data-grid-item note" data-data={id}>
      <span>{title}</span>
      <p>
        {note.split(" ").slice(0, 22).join(" ")}
        {note.split(" ").length > 22 && "..."}
      </p>
    </div>
  );
};
