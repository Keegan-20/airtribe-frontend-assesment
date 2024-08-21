// src/App.jsx
import "./App.css";
import { useState, useEffect } from "react";
import TaskColumn from "./components/TaskColumn/TaskColumn";
import TaskModal from "./components/TaskModal/TaskModal";
import Header from "./components/Header/Header"; 
import { useModal } from "./Custom Hook/useModal";
import { loadTasksFromStorage, saveTasksToStorage } from "./utils";

function App() {
  const [currentStatus, setCurrentStatus] = useState("");
  const [currentTask, setCurrentTask] = useState(null);
  const [allTasks, setAllTasks] = useState(loadTasksFromStorage());
  const [taskColumns, setTaskColumns] = useState([
    { title: "Not Started", status: "notStarted", color: "#FFCFD4" },
    { title: "In Progress", status: "inProgress", color: "#FDF0CF" },
    { title: "Completed", status: "completed", color: "#CDE8E2" },
  ]);
  
  const { isModalOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    saveTasksToStorage(allTasks);
  }, [allTasks]);

  const handleAddTask = (status) => {
    setCurrentStatus(status);
    setCurrentTask(null);
    openModal();
  };

  const handleEditTask = (task, index) => {
    setCurrentStatus(task.status);
    setCurrentTask({ ...task, index });
    openModal();
  };

  const handleSaveTask = (task) => {
    if (currentTask) {
      setAllTasks((prevTasks) => {
        const updatedTasks = [...prevTasks];
        updatedTasks[currentTask.index] = task;
        return updatedTasks;
      });
    } else {
      setAllTasks((prevTasks) => [...prevTasks, { ...task, status: currentStatus, id: Date.now() }]);
    }
    closeModal();
  };

  const handleDeleteTask = (taskToDelete) => {
    setAllTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskToDelete.id));
    closeModal();
  };

  const handleAddColumn = () => {
    const newStatus = `status_${Date.now()}`;
    const newColumn = {
      title: "New Status",
      status: newStatus,
      color: "#E0E0E0",
    };
    setTaskColumns([...taskColumns, newColumn]);
  };

  return (
    <div className="app">
      <Header onAddColumn={handleAddColumn} /> {/* Add Header component */}
      {isModalOpen && (
        <TaskModal
          taskData={currentTask}
          onSave={handleSaveTask}
          onDelete={handleDeleteTask}
          onClose={closeModal}
        />
      )}
      <main className="app_main">
        {taskColumns.map((column) => (
          <TaskColumn
            key={column.status}
            taskColumnTitle={column.title}
            color={column.color}
            tasks={allTasks}
            status={column.status}
            onAddTask={handleAddTask}
            onEditTask={handleEditTask}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
