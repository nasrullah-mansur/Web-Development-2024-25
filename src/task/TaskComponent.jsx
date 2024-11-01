import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default function TaskComponent() {
    return (
        <div className="max-w-7xl mx-auto my-3 grid grid-cols-12 gap-4">
            <TaskForm />
            <TaskList />
        </div>
    )
}
