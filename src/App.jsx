import { useState } from "react";
import TaskComponent from "./task/TaskComponent"
import { initialTasks } from "./data/initialTasks";
import { TaskContext } from "./context";



function App() {
  const [tasks, setTasks] = useState(initialTasks());
  const [taskToEdit, setTaskToEdit] = useState(null);

  const providerValue = {
    tasks: tasks,
    setTasks: setTasks,
    taskToEdit: taskToEdit,
    setTaskToEdit: setTaskToEdit,
  }
  return (
    <TaskContext.Provider value={providerValue}>
      <TaskComponent />
    </TaskContext.Provider>

  )
}

export default App
