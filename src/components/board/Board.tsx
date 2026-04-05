import BoardColumn from "./BoardColumn";

const columns = [
  {
    id: "todo",
    title: "To Do",
  },
  {
    id: "in-progress",
    title: "In Progress",
  },
  {
    id: "review",
    title: "For Review",
  },
  {
    id: "done",
    title: "Done",
  },
];

const Board = () => {
  return (
    <div className="board">
      {columns.map((column) => (
        <BoardColumn key={column.id} title={column.title} />
      ))}
    </div>
  );
};

export default Board;
