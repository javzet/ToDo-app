import { CreateTodoForm } from "../components/CreateForm/CreateTodoForm";
import { CreateNoteForm } from "../components/CreateForm/CreateNoteForm";
import { ActionType } from "../types";

export default function CreatePage({ type }: { type: ActionType }) {
  return type === "note" ? <CreateNoteForm /> : <CreateTodoForm />;
}
