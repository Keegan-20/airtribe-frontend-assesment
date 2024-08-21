import "./TaskColumn.css";
import { Ellipsis } from "lucide-react";
import { Plus } from "lucide-react";
import TaskCard from "../TaskCard/TaskCard";
import DropArea from "../DropArea/DropArea";

const TaskColumn = ({
  taskColumnTitle,
  color,
  tasks,
  status,
  onAddTask,
  onEditTask,
  onDrop,
  setActiveCard,
}) => {
  return (
    <section className="task_column">
      <div className="task_column_heading">
        <h3 style={{ backgroundColor: color }}>{taskColumnTitle}</h3>

        <div className="task_column_icons">
          <Ellipsis />
          <Plus onClick={() => onAddTask(status)} />
        </div>
      </div>
      <DropArea onDrop={() => onDrop(status,0)} />
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <div key={index}>
            <TaskCard
              title={task.task}
              description={task.description}
              index={index}
              onEdit={() => onEditTask(task, index)}
              setActiveCard={setActiveCard}
            />
            <DropArea onDrop={() => onDrop(status,index + 1)} />
            </div>
          )
      )}
      <button onClick={() => onAddTask(status)} className="new_task_button">
        <Plus /> New
      </button>
    </section>
  );
};
export default TaskColumn;
