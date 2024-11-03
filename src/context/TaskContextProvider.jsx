import { useReducer, useState } from 'react'
import TaskReducer from '../reducer/TaskReducer';
import { initialTasks } from '../data/initialTasks';
import { TaskContext } from '.';
import TestReducer from '../reducer/TestReducer';

function TaskContextProvider({ children }) {
    const [taskToEdit, setTaskToEdit] = useState(null);

    const [tasks, dispatch] = useReducer(TaskReducer, initialTasks());


    // const [text, setText] = useState('');
    const [text, setText] = useReducer(TestReducer, [
        {
            id: '1',
            text: 'one'
        },
        {
            id: '2',
            text: 'two'
        }
    ]);


    const handleClick = () => {
        setText({
            type: 'ADD_SOMETHING',
            payload: {
                id: '99999',
                text: 'this is text',
            }
        });
    }

    const handleEdit = () => {
        setText({
            type: 'EDIT_SOMETHING',
            payload: {
                id: '99999',
                text: 'this is text',
            }
        });
    }

    const handleDelete = () => {
        setText({
            type: 'DELETE_SOMETHING',
            payload: {
                id: '99999',
                text: 'this is text',
            }
        });
    }


    // console.log(text);



    const providerValue = {
        tasks: tasks,
        dispatch: dispatch,
        taskToEdit: taskToEdit,
        setTaskToEdit: setTaskToEdit,
    }

    return (
        <TaskContext.Provider value={providerValue}>
            {children}
            {/* <button className='border' onClick={handleClick}>Add</button> <br />
            <button className='border' onClick={handleEdit}>Edit</button> <br />
            <button className='border' onClick={handleDelete}>Delete</button> <br /> */}
        </TaskContext.Provider>
    )
}

export default TaskContextProvider