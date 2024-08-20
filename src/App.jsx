import "./App.css";
import TaskColumn from "./components/TaskColumn/TaskColumn";
import TaskModal from "./components/TaskModal/TaskModal";
import { useState, useEffect } from "react";
import { loadTasksFromStorage, saveTasksToStorage } from "./utils";

function App() {
  const [allTasks, setAllTasks] = useState(loadTasksFromStorage());

  useEffect(() => {
    saveTasksToStorage(allTasks);
  }, [allTasks]);

  return (
    <div className="app">
      <TaskModal setAllTasks={setAllTasks} />
      <main className="app_main">
        <TaskColumn
          taskColumnTitle="Not Started"
          color="#FFCFD4"
          tasks={allTasks}
          status="notStarted"
        />
        <TaskColumn
          taskColumnTitle="In progress"
          color="#FDF0CF"
          tasks={allTasks}
          status="inProgress"
        />
        <TaskColumn
          taskColumnTitle="Completed"
          color="#CDE8E2"
          tasks={allTasks}
          status="completed"
        />
      </main>
    </div>
  );
}

export default App;
