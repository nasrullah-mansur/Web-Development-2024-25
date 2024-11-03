import { useContext, useEffect, useRef, useState } from "react"
import { TaskContext } from "../context";
import TestComponent from "./TestComponent";


export default function TaskForm() {

    const { dispatch, taskToEdit, setTaskToEdit } = useContext(TaskContext);

    const [text, setText] = useState('');

    const inputData = useRef(null);

    const handleSecondBtn = () => {
        console.log(inputData.current.value);
    }

    useEffect(() => {
        if (taskToEdit) {
            setText(taskToEdit.text);
        }
    }, [taskToEdit])

    const handleClick = () => {
        if (taskToEdit) {
            dispatch({
                type: 'UPDATE_TASK',
                payload: {
                    ...taskToEdit,
                    text: text
                },
            })

            setTaskToEdit(null)

        } else {
            dispatch({
                type: 'ADD_TASK',
                payload: {
                    id: crypto.randomUUID(),
                    text: text,
                }
            })
        }

        setText('');
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }

    console.log('hello');

    const handleChange2 = () => {
        console.log(inputData.current.value);
    }


    return (
        <div className="col-span-4 bg-slate-100 p-3 rounded shadow-sm">
            <h2 className="text-2xl font-bold mb-3">Task Form</h2>
            <input value={text} onChange={handleChange} type="text" className="border p-2 w-full mb-2" />
            <button onClick={handleClick} className="py-2 px-4 bg-green-600 text-white">{taskToEdit ? 'Edit Task' : 'Add Task'}</button>

            <br />
            <br />
            <br />

            <input onChange={handleChange2} ref={inputData} type="text" className="border p-2 w-full mb-2" />
            <button onClick={handleSecondBtn} className="py-2 px-4 bg-green-600 text-white">Second BTN</button>
            <TestComponent ref={inputData} />
        </div>
    )
}
