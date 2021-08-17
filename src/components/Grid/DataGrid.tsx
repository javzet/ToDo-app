import { CreateButton } from "../CreateButton";
import { NoDataComponent } from "../NoDataComponent";
import { DataGridNote } from "./DataGridNote";
import { StyleIcons } from "./StyleIcons";
import { Note, Todo } from "../../types";
import { useEffect, useRef } from "react";
import { DataGridTodo } from "./DataGridTodo";

interface DataGridProps {
  data: Note[] | Todo[];
}

export const DataGrid = ({ data }: DataGridProps) => {
  const gridDataRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("");
  }, []);

  return (
    <>
      <StyleIcons gridRef={gridDataRef} />
      <div className="data-grid grid" id="data-grid" ref={gridDataRef}>
        {data.map((item) =>
          item.type === "note" ? (
            <DataGridNote {...item} key={item.id} />
          ) : (
            <DataGridTodo {...item} key={item.id} />
          )
        )}
      </div>
    </>
  );
};
