import { useContext } from "react";
import { TaskContext } from "../context";

export default function TaskItem({ task }) {

    const { tasks, setTasks, setTaskToEdit } = useContext(TaskContext);

    const handleClick = () => {
        let isConfirm = confirm('Are you sure you want to delete it?');

        if (isConfirm) {
            setTasks(tasks.filter(t => t.id !== task.id));
        }

    }

    return (
        <li className="flex items-center bg-white shadow-sm p-2 rounded mb-3">
            <span className="font-semibold text-lg">#</span>
            <p className="font-semibold text-lg ml-2">{task.text}</p>
            <button onClick={() => setTaskToEdit(task)} className="py-1 px-2 rounded bg-green-600 text-white ml-auto">Edit</button>
            <button onClick={handleClick} className="py-1 px-2 rounded bg-rose-600 text-white ml-1">Delete</button>
        </li>
    )
}
