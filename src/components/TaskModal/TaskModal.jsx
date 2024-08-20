import { useState } from "react";
import "./TaskModal.css";

const TaskModal = ({ setAllTasks }) => {
 
  const [taskData, setTaskData] = useState({
    task: "", //property name and default value
    status: "notStarted",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value }; //inorder to avoid overwrite and store the previous data and update the value.
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    setAllTasks((prev) => {
      return [...prev, taskData];
    });
    //clearing the previous task input from the from
    setTaskData({
      task: "", //property name and default value
      status: "todo",
    });
  };
  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="task_input"
          placeholder="Enter your Task"
          autoComplete="off"
          onChange={handleChange}
        />
        <div className="tags_section">
          <div>
            <select
              className="task_status"
              name="status"
              value={taskData.status}
              onChange={handleChange}
            >
              <option value="notStarted">Not Started</option>
              <option value="inProgress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskModal;
