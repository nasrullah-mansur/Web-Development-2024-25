import { useContext, useEffect, useState } from "react"
import { TaskContext } from "../context";


export default function TaskForm() {

    const { tasks, setTasks, taskToEdit, setTaskToEdit } = useContext(TaskContext);

    const [text, setText] = useState('');

    useEffect(() => {
        if (taskToEdit) {
            setText(taskToEdit.text);
        }
    }, [taskToEdit])

    const handleClick = () => {
        if (taskToEdit) {
            // Updating;
            setTasks(tasks.map(task => {
                if (task.id === taskToEdit.id) {
                    return {
                        ...taskToEdit,
                        text: text
                    };
                } else {
                    return task;
                }
            }));
            setTaskToEdit(null)

        } else {
            setTasks([
                ...tasks,
                {
                    id: crypto.randomUUID(),
                    text: text,
                }
            ])
        }

        setText('');
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div className="col-span-4 bg-slate-100 p-3 rounded shadow-sm">
            <h2 className="text-2xl font-bold mb-3">Task Form</h2>
            <input value={text} onChange={handleChange} type="text" className="border p-2 w-full mb-2" />
            <button onClick={handleClick} className="py-2 px-4 bg-green-600 text-white">{taskToEdit ? 'Edit Task' : 'Add Task'}</button>
        </div>
    )
}
