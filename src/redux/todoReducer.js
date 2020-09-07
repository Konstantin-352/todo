export const ADD_TODO = 'ADD_TODO';
export const LOAD_TODOS = 'LOAD_TODOS';
export const CHANGE_TODO = 'CHANGE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

const initialState = {
    todos: []
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]};
        case LOAD_TODOS:
            return {...state, todos: [...state.todos, ...action.payload]};
        case CHANGE_TODO:
            return {...state, todos: [...action.payload]};
        default:
            return state;
    }
};

export const addTodoAC = (payload) => ({
    type: ADD_TODO,
    payload
});

export const loadTodosAC = () => {
    return async dispatch => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
        const json = await response.json();
        dispatch({type: LOAD_TODOS, payload: json});
    }
};

export const changeTodoAC = (payload) => ({
    type: CHANGE_TODO,
    payload
});