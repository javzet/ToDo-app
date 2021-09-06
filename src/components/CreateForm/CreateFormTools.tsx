import { ReturnIcon } from "../../images/return-icon";
import { TimesCircleIcon } from "../../images/times-circle-icon";
import { ActionType } from "../../types";

export const CreateFormTools = ({
  type,
  handleActionClick
}: {
  handleActionClick: (action: "save" | "cancel") => void;
  type: ActionType;
}) => {
  return (
    <div className="tool-buttons">
      <button className="tool-button" onClick={() => handleActionClick("save")}>
        <ReturnIcon />
        <span>Guardar {type === "note" ? "nota" : "lista"}</span>
      </button>
      <button
        className="tool-button"
        onClick={() => handleActionClick("cancel")}
      >
        <TimesCircleIcon />
        <span>Descartar {type === "note" ? "nota" : "lista"}</span>
      </button>
    </div>
  );
};
