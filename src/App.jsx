import "./App.css";
import TaskColumn from "./components/TaskColumn/TaskColumn";

function App() {
  return (
    <div className="app">
      {/* <TaskForm/> */}
      <main className="app_main">
        <TaskColumn taskColumnTitle="Not Started" color="#FFCFD4"/>
        <TaskColumn taskColumnTitle="In progress" color="#FDF0CF"/>
        <TaskColumn taskColumnTitle="Completed" color="#CDE8E2" />
      </main>
    </div>
  );
}

export default App;