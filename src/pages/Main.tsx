import { useSelector } from "react-redux";
import { CreateButton } from "../components/CreateButton";
import { DataGrid } from "../components/Grid/DataGrid";
import { Note, Todo } from "../types";

export default function Main() {
  const notes = useSelector(
    (state: { notes: Note[]; todos: Todo[] }) => state.notes
  );
  return (
    <>
      <div className="content">
        <CreateButton />
        <DataGrid data={notes} />
      </div>
    </>
  );
}
