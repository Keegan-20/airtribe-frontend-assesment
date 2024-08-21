import { useState, useEffect } from "react";
import "./TaskModal.css";
import { Trash2 } from "lucide-react";

const TaskModal = ({
  taskData: initialTaskData,
  onSave,
  onClose,
  onDelete,
}) => {
  // Initialize taskData with the provided task data or an empty task
  const [taskData, setTaskData] = useState({
    task: "",
    description: "",
    status: "notStarted",
  });

// Populate the modal with existing data if present
  useEffect(() => {
    if (initialTaskData) {
      setTaskData(initialTaskData);
    }
  }, [initialTaskData]);

  // Handle changes to the input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({
      ...prev,// spread the previous state inorder to avoid overwrite and store the previous data and update the value.
      [name]: value,// Update the specific property that was changed
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskData.task) {
      onSave(taskData);
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
          <div className="button_container">
            <button type="submit" className="task_submit">
              {initialTaskData ? "Update Task" : "+ Add Task"}
            </button>
            {initialTaskData && (
              <button
                type="button"
                className="task_delete"
                onClick={() => onDelete(initialTaskData)}
              >
                <Trash2 />
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default TaskModal;
