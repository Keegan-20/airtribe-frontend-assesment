import "./TaskColumn.css";
import { Ellipsis } from "lucide-react";
import { Plus } from "lucide-react";
import TaskCard from "../TaskCard/TaskCard";

const TaskColumn = ({ taskColumnTitle, color, tasks, status, onAddTask }) => {
  return (
    <section className="task_column">
      <div className="task_column_heading">
        <h3 style={{ backgroundColor: color }}>{taskColumnTitle}</h3>
       
        <div className="task_column_icons">
          <Ellipsis />
          <Plus  onClick={() => onAddTask(status)} />
        </div>
      </div>
      {tasks.map(
          (task, index) =>
            task.status === status && (
              <TaskCard key={index} title={task.task}  description={task.description} index={index} />
            )
        )}
         <button onClick={() => onAddTask(status)} className="new_task_button">
         <Plus /> New
      </button>
    </section>
  );
};
export default TaskColumn;
