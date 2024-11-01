import { createContext } from "react";

const TaskContext = createContext({
    tasks: [],
    setTasks: () => {},
    taskToEdit: {},
    setTaskToEdit: () => {},
});


export {TaskContext};