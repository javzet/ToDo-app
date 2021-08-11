import { useState } from "react";
import { TODO_CONTEXT } from "./components/context/ToDo-Context";
import { Appbar } from "./components/Appbar";
import { CreateButton } from "./components/CreateButton";
import { CreateNote } from "./components/CreateNote";
import { ImageNote } from "./images/image-note";
import { CreateTask } from "./components/CreateTask";
import { CreateDataType, CreationProps, DataType } from "./types";
import { useEffect } from "react";
import { getData } from "./helpers/getData";

export default function ToDo() {
  const [generalData, setGeneralData] = useState<any>({});
  const [createNote, setCreateNote] = useState(false);
  const [createTodo, setCreateTodo] = useState(false);
  const [newCreation, setNewCreation] = useState<CreationProps>({
    active: false,
    type: "",
  });
  const [_data, setData] = useState({});

  const handleNewCreation = (props: CreationProps) => {
    setNewCreation(props);
  };

  const data = <T extends DataType>() => _data as CreateDataType<T>;

  useEffect(() => {
    setGeneralData(getData());
  }, []);

  console.log("generalData", generalData);

  return (
    <TODO_CONTEXT.Provider
      value={{
        generalData,
        setGeneralData,
        createNote,
        setCreateNote,
        createTodo,
        setCreateTodo,
        newCreation,
        setNewCreation,
        handleNewCreation,
        data,
        setData,
      }}
    >
      <div>
        <Appbar />

        {!newCreation.active && (
          <div className="content">
            {generalData.notes.lenght === 0 ? (
              <>
                <div className="no-notes">
                  <ImageNote />
                  <p>Aún no hay notas creadas</p>
                </div>
                <CreateButton />
              </>
            ) : (
              <>
                <CreateButton />
              </>
            )}
          </div>
        )}

        {newCreation.type === "note" && <CreateNote />}
        {newCreation.type === "todo" && <CreateTask />}
      </div>
    </TODO_CONTEXT.Provider>
  );
}
