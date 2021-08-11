export const DataGridItem = ({
  title,
  data,
  id,
  type,
}: {
  title: string;
  data: string;
  id: string;
  type: "notes" | "todos";
}) => {
  return (
    <div className="data-grid-item" data-data={id}>
      <span>{title}</span>
      <p>{data}</p>
    </div>
  );
};
