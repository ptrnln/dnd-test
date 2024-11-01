const initialState = {
    1: "Implement drag and drop",
    2: "Dance!"
}

const RECEIVE_TODO = "todos/RECEIVE_TODO"

export const receiveToDo = (todo) => {
    return {
        type: RECEIVE_TODO,
        payload: todo
    }
}

export default function ToDoReducer(state = initialState, action) {
    let newState = { ...(Object.freeze(state)) };

    let newTodoIdx = Object.keys(newState).length + 1;
    

    switch(action.type) {
        case RECEIVE_TODO:
            newState[newTodoIdx] = action.payload
            return {...newState};
        default:
            return {...newState};
    }

}