import { useSelector } from "react-redux";
import { CreateButton } from "../components/CreateButton";
import { DataGrid } from "../components/Grid/DataGrid";
import { NoDataComponent } from "../components/NoDataComponent";
import { Note, Todo } from "../types";

export default function Main() {
  const notes = useSelector(
    (state: { notes: Note[]; todos: Todo[] }) => state.notes
  );
  return (
    <div className="content">
      {notes.length === 0 ? (
        <NoDataComponent />
      ) : (
        <>
          <CreateButton />
          <DataGrid data={notes} />
        </>
      )}
    </div>
  );
}
