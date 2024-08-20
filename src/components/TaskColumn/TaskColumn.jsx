import "./TaskColumn.css";
import { Ellipsis } from "lucide-react";
import { Plus } from "lucide-react";

const TaskColumn = ({ taskColumnTitle, color }) => {
  return (
    <section className="task_column">
      <div className="task_column_heading">
        <h3 style={{ backgroundColor: color }}>{taskColumnTitle}</h3>

        <div className="task_column_icons">
          <Ellipsis />
          <Plus />
        </div>
      </div>
    </section>
  );
};

export default TaskColumn;
