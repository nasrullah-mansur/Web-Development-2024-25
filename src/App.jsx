import { useReducer } from "react"
import AddTask from "./components/AddTask"
import TaskList from "./components/TaskList"
import { initialTasks } from "./data/initialTasks"
import tasksReducer from "./reducer/tasksReducer";

function App() {

  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  const handleAddTask = (text) => {
    dispatch({
      type: 'added_task',
      text: text,
    });
  }

  const handleEditTask = (task) => {
    dispatch({
      type: 'edited_task',
      task: task,
    });
  }

  const handleDeleteTask = (id) => {
    dispatch({
      type: 'deleted_task',
      id: id,
    });
  }


  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">Prague itinerary</h1>
      </div>

      <AddTask onAddTask={handleAddTask} />

      <TaskList onDeleteTask={handleDeleteTask} onEditTask={handleEditTask} tasks={tasks} />
    </>
  )
}



















export default App
