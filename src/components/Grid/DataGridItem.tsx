export const DataGridItem = ({
  title,
  data,
}: {
  title: string;
  data: string;
}) => {
  return (
    <div className="data-grid-item">
      <span>{title}</span>
      <p>{data}</p>
    </div>
  );
};
