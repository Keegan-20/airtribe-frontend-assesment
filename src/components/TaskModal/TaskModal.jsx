import { useState } from "react";
import "./TaskModal.css";

const TaskModal = ({ onSave,onClose }) => {
  // Initialize taskData with an empty task and default status
  const [taskData, setTaskData] = useState({
    task: "", 
    description:"",
    status: "notStarted", 
  });

  // Handle changes to the input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({
      ...prev, // spread the previous state inorder to avoid overwrite and store the previous data and update the value.
      [name]: value, // Update the specific property that was changed
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskData.task) {
      onSave(taskData); 
      setTaskData({
        task: "", 
        description:"",
        status: "notStarted", // Reset the status to the default value after submission
      });
      onClose();
    }
  };

  return (
    <>
    <div className="modal_overlay" onClick={onClose}></div>
    <div className="task_modal">
      <form onSubmit={handleSubmit}>
      <button className="close_button" onClick={onClose}>
          &times;
        </button>
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="task_input"
          placeholder="Enter your Task"
          autoComplete="off"
          onChange={handleChange}
          required
        />
         <textarea
          name="description"
          value={taskData.description}
          className="task_description"
          placeholder="Enter task description (optional)"
          onChange={handleChange}
        />
        <button type="submit" className="task_submit">
          + Add Task
        </button>
      </form>
    </div>
    </>
  );
};

export default TaskModal;
