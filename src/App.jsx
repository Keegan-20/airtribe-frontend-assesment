import "./App.css";
import { useState, useEffect } from "react";
import TaskColumn from "./components/TaskColumn/TaskColumn";
import TaskModal from "./components/TaskModal/TaskModal";
import { useModal } from "./Custom Hook/useModal";
import { loadTasksFromStorage, saveTasksToStorage } from "./utils";

function App() {
  const [currentStatus, setCurrentStatus] = useState("");
  const [currentTask, setCurrentTask] = useState(null);
  const { isModalOpen, openModal, closeModal } = useModal();
  const [allTasks, setAllTasks] = useState(loadTasksFromStorage());

  useEffect(() => {
    saveTasksToStorage(allTasks);
  }, [allTasks]);

  const handleAddTask = (status) => {
    setCurrentStatus(status);
    setCurrentTask(null); // reset current task when adding new task
    openModal();
  };

  const handleEditTask = (task, index) => {
    setCurrentStatus(task.status);
    setCurrentTask({ ...task, index }); // store the index with the task data
    openModal();
  };

  const handleSaveTask = (task) => {
    if (currentTask) {
      setAllTasks((prevTasks) => {
        const updatedTasks = [...prevTasks];
        updatedTasks[currentTask.index] = task; // update the existing task
        return updatedTasks;
      });
    } else {
      setAllTasks((prevTasks) => [...prevTasks, { ...task, status: currentStatus, 
        id:Date.now() }]);
    }
    closeModal();
  };

  const handleDeleteTask = (taskToDelete) => {
    setAllTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskToDelete.id));
    closeModal();
  };
  

  return (
    <div className="app">
      {isModalOpen && (
        <TaskModal
          taskData={currentTask}
          onSave={handleSaveTask}
          onDelete={handleDeleteTask}
          onClose={closeModal}
        />
      )}
      <main className="app_main">
        <TaskColumn
          taskColumnTitle="Not Started"
          color="#FFCFD4"
          tasks={allTasks}
          status="notStarted"
          onAddTask={handleAddTask}
          onEditTask={handleEditTask}
        />
        <TaskColumn
          taskColumnTitle="In Progress"
          color="#FDF0CF"
          tasks={allTasks}
          status="inProgress"
          onAddTask={handleAddTask}
          onEditTask={handleEditTask}
        />
        <TaskColumn
          taskColumnTitle="Completed"
          color="#CDE8E2"
          tasks={allTasks}
          status="completed"
          onAddTask={handleAddTask}
          onEditTask={handleEditTask}
        />
      </main>
    </div>
  );
}

export default App;
