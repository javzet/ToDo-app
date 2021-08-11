import { useContext } from "react";
import { TODO_CONTEXT } from "./context/ToDo-Context";
import { HamburguerIcon } from "./HamburgerIcon";

export const Appbar = () => {
  const context = useContext(TODO_CONTEXT);

  return (
    <div className="navbar">
      <div className="container">
        <HamburguerIcon />
        <h1>ToDo App</h1>
      </div>
    </div>
  );
};
