import { useState } from "react"


export default function TaskItem({ task, onEditTask, onDeleteTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(task.text);
    let onEditContent;

    const handleEditTask = () => {
        onEditTask({
            ...task,
            text: text
        });

        setIsEditing(false);
    }


    if (isEditing) {
        onEditContent = (
            <>
                <input value={text} onChange={(e) => setText(e.target.value)} type="text" className="border" />
                <button onClick={handleEditTask} className="p-1 rounded bg-green-600 text-white mx-1">Save</button>
            </>
        )
    } else {
        onEditContent = (
            <>
                <p>{task.text}</p>
                <button onClick={() => setIsEditing(true)} className="p-1 rounded bg-green-600 text-white mx-1">Edit</button>
            </>
        )
    }



    return (
        <li className="flex mb-2 items-center">
            <p>#</p>
            {onEditContent}
            <button onClick={() => onDeleteTask(task.id)} className="p-1 rounded bg-rose-600 text-white mx-1">Delete</button>
        </li>
    )
}
