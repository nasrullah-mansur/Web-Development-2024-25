import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onEditTask, onDeleteTask }) {
    return (
        <ul className="mt-3 container mx-auto">
            {tasks.map(task => <TaskItem onDeleteTask={onDeleteTask} onEditTask={onEditTask} key={task.id} task={task} />)}
        </ul>
    )
}
