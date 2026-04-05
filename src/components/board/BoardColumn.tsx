import TaskCard from "./TaskCard";

type BoardColumnProps = {
  title: string;
};

const BoardColumn = ({ title }: BoardColumnProps) => {
  return (
    <div className="board-column">
      <div className="board-column-header">
        <h3>{title}</h3>
        <span>2</span>
      </div>

      <div className="board-column-body">
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
};

export default BoardColumn;
