import "./TaskColumn.css";
import { Ellipsis } from "lucide-react";
import { Plus } from "lucide-react";
import TaskCard from "../TaskCard/TaskCard";

const TaskColumn = ({ taskColumnTitle, color, tasks, status }) => {
  return (
    <section className="task_column">
      <div className="task_column_heading">
        <h3 style={{ backgroundColor: color }}>{taskColumnTitle}</h3>
       
        <div className="task_column_icons">
          <Ellipsis />
          <Plus />
        </div>
      </div>
      {tasks.map(
          (task, index) =>
            task.status === status && (
              <TaskCard key={index} title={task.task} index={index} />
            )
        )}
    </section>
  );
};

export default TaskColumn;
