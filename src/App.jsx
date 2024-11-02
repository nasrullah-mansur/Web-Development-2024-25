import { useReducer, useState } from "react";
import TaskComponent from "./task/TaskComponent"
import { initialTasks } from "./data/initialTasks";
import { TaskContext } from "./context";
import TaskReducer from "./reducer/TaskReducer";



function App() {
  // const [tasks, setTasks] = useState(initialTasks());
  const [taskToEdit, setTaskToEdit] = useState(null);

  const [tasks, dispatch] = useReducer(TaskReducer, initialTasks());


  const providerValue = {
    tasks: tasks,
    dispatch: dispatch,
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
