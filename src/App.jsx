import TaskContextProvider from "./context/TaskContextProvider"
import TaskComponent from "./task/TaskComponent"

function App() {
  return (
    <TaskContextProvider>
      <TaskComponent />
    </TaskContextProvider>

  )
}

export default App
