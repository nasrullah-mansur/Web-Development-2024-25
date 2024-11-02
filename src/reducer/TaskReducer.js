export default function TaskReducer(tasks, action) {

    const {type, payload} = action;

    switch (type) {
        case "ADD_TASK": {
            return [
                ...tasks,
                payload,
            ]
        }

        case "UPDATE_TASK": {
            console.log('ok');
            
            return tasks.map(task => {
                if(task.id === payload.id) {
                    return payload;
                } else {
                    return task;
                }
            })
        }

        case "DELETE_TASK": {
            return tasks.filter(t => t.id !== payload)
        }

        case "CLEAR_TASK": {
            return [];
        }
            
    
        default:
            break;
    }
    
    
}