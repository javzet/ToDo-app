import { CreateForm } from "../components/CreateForm";
import { ActionType } from "../types";

export default function CreatePage({ type }: { type: ActionType }) {
  return <CreateForm type={type} />;
}
