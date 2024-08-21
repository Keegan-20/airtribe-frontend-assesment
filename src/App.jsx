import "./App.css";
import { useState, useEffect } from "react";
import TaskColumn from "./components/TaskColumn/TaskColumn";
import TaskModal from "./components/TaskModal/TaskModal";
import { useModal } from "./Custom Hook/useModal";
import { loadTasksFromStorage, saveTasksToStorage } from "./utils";

function App() {
  const [currentStatus, setCurrentStatus] = useState("");
  const { isModalOpen, openModal, closeModal } = useModal(); 
  const [allTasks, setAllTasks] = useState(loadTasksFromStorage());

  useEffect(() => {
    saveTasksToStorage(allTasks);
  }, [allTasks]);

  //opening and closing of modal
  const handleAddTask = (status) => {
    setCurrentStatus(status);
    openModal(); 
  };

  const handleSaveTask = (task) => {
    setAllTasks((prevTasks) => [...prevTasks, { ...task, status: currentStatus }]);
    closeModal(); 
  };

  
  return (
    <div className="app">
      {isModalOpen && <TaskModal onSave={handleSaveTask}  onClose={closeModal}/>}
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
