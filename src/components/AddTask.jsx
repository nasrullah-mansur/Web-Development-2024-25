import { useState } from "react"

export default function AddTask({ onAddTask }) {

    const [text, setText] = useState('');

    const handleAddTask = () => {
        onAddTask(text);
        setText('');
    }

    return (
        <div className="flex container mx-auto">
            <input value={text} onChange={(e) => setText(e.target.value)} type="text" className="border" placeholder="Add Task" />
            <button onClick={handleAddTask} className="bg-green-600 text-white p-1 rounded-sm">Add</button>
        </div>
    )
}
