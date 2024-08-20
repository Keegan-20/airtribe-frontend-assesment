//Storing tasks locally in localStorage
export const loadTasksFromStorage = () => {
    const oldTasks = localStorage.getItem("tasks");
    return JSON.parse(oldTasks) || [];
  };
  
  export const saveTasksToStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };