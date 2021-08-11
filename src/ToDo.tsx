import { useState } from "react";
import { TODO_CONTEXT } from "./components/context/ToDo-Context";
import { Appbar } from "./components/Appbar";
import { CreateButton } from "./components/CreateButton";
import { ImageNote } from "./images/image-note";
import { CreateTask } from "./components/CreateTask";
import { useEffect } from "react";
import { getData } from "./helpers/getData";
import { CreateForm } from "./components/CreateForm";
import { DataGrid } from "./components/Grid/DataGrid";
import { DataType } from "./types";

export default function ToDo() {
  const [generalData, setGeneralData] = useState<DataType[]>([]);
  const [newCreation, setNewCreation] = useState<{
    type: "notes" | "todos" | "";
    active: boolean;
  }>({
    type: "",
    active: false,
  });

  useEffect(() => {
    setGeneralData(getData());
  }, []);

  return (
    <TODO_CONTEXT.Provider
      value={{
        generalData,
        setGeneralData,
        newCreation,
        setNewCreation,
      }}
    >
      <div>
        <Appbar />
        <div className="content">
          {!newCreation.active && <DataGrid data={generalData} />}

          {newCreation.type === "notes" && <CreateForm type="notes" />}
          {newCreation.type === "todos" && <CreateForm type="todos" />}
        </div>
      </div>
    </TODO_CONTEXT.Provider>
  );
}
