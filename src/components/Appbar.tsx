import { useContext } from "react";
import { saveData } from "../hooks/useSaveData";
import { ReturnIcon } from "../images/return-icon";
import { TimesCircleIcon } from "../images/times-circle-icon";
import { TODO_CONTEXT } from "./context/ToDo-Context";
import { HamburguerIcon } from "./HamburgerIcon";

export const Appbar = () => {
  const context = useContext(TODO_CONTEXT);

  const handleCloseClick = () => {
    context.setNewCreation({ type: "", active: false });
    console.log("Cancelar Nota");
  };

  const handleReturnClick = () => {
    context?.setNewCreation({ type: "", active: false });
    console.log(context.data);
    saveData(context.data<string>(), "notes");
  };

  return (
    <div className="navbar">
      <div className="container">
        <HamburguerIcon />
        <h1>ToDo App</h1>
        {context?.newCreation.active && (
          <div className="tool-icons">
            <div className="return-icon tool-icon" onClick={handleReturnClick}>
              <ReturnIcon />
            </div>
            <div
              className="times-circle-icon tool-icon"
              onClick={handleCloseClick}
            >
              <TimesCircleIcon />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
