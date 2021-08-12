import { CreateButton } from "../CreateButton";
import { NoDataComponent } from "../NoDataComponent";
import { DataGridItem } from "./DataGridItem";
import { StyleIcons } from "./StyleIcons";
import { DataType } from "../../types";
import { useRef } from "react";

export const DataGrid = ({ data }: { data: DataType[] }) => {
  const gridDataRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {data.length > 0 ? (
        <>
          <CreateButton />
          <StyleIcons gridRef={gridDataRef} />
          <div className="data-grid" id="data-grid" ref={gridDataRef}>
            {data.map((item: DataType) => (
              <DataGridItem {...item} key={item.id} />
            ))}
          </div>
        </>
      ) : (
        <NoDataComponent />
      )}
    </>
  );
};
