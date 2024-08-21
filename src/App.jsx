import "./App.css";
import { useState, useEffect } from "react";
import TaskColumn from "./components/TaskColumn/TaskColumn";
import TaskModal from "./components/TaskModal/TaskModal";
import { loadTasksFromStorage, saveTasksToStorage } from "./utils";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStatus, setCurrentStatus] = useState("");
  const [allTasks, setAllTasks] = useState(loadTasksFromStorage());

  useEffect(() => {
    saveTasksToStorage(allTasks);
  }, [allTasks]);

  // Function to handle adding a task under a specific status
  const handleAddTask = (status) => {
    setCurrentStatus(status);
    setIsModalOpen(true); // Open the modal to add a new task
  };

  const handleSaveTask = (task) => {
    setAllTasks((prevTasks) => [...prevTasks, { ...task, status: currentStatus }]);
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <div className="app">
      {isModalOpen && <TaskModal onSave={handleSaveTask}  onClose={handleCloseModal}/>}
      <main className="app_main">
        <TaskColumn
          taskColumnTitle="Not Started"
          color="#FFCFD4"
          tasks={allTasks}
          status="notStarted"
          onAddTask={handleAddTask}
        />
        <TaskColumn
          taskColumnTitle="In Progress"
          color="#FDF0CF"
          tasks={allTasks}
          status="inProgress"
          onAddTask={handleAddTask}
        />
        <TaskColumn
          taskColumnTitle="Completed"
          color="#CDE8E2"
          tasks={allTasks}
          status="completed"
          onAddTask={handleAddTask}
        />
      </main>
    </div>
  );
}

export default App;
