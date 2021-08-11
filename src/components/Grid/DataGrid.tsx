import { DataType } from "../../types";
import { CreateButton } from "../CreateButton";
import { NoDataComponent } from "../NoDataComponent";
import { DataGridItem } from "./DataGridItem";

export const DataGrid = ({ data }: { data: DataType[] }) => {
  return (
    <>
      {data.length > 0 ? (
        <>
          <CreateButton />
          <div className="data-grid grid">
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
