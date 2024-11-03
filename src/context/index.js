import { createContext } from "react";

const TaskContext = createContext({
    tasks: [],
    dispatch: () => {},
    taskToEdit: {},
    setTaskToEdit: () => {},
});


export {TaskContext};