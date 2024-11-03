export default function TestReducer(state, action) {

    if(action.type === "ADD_SOMETHING") {
        return 'A new item added'
    }

   else if(action.type === "EDIT_SOMETHING") {
        return 'A new item edited';
    }

   else if(action.type === "DELETE_SOMETHING") {
        return 'A new item deleted'
    }

    
}