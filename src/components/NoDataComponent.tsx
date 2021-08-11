import { ImageNote } from "../images/image-note";
import { CreateButton } from "./CreateButton";

export const NoDataComponent = () => {
  return (
    <>
      <div className="no-notes">
        <ImageNote />
        <p>Aún no hay notas creadas</p>
      </div>
      <CreateButton />
    </>
  );
};
