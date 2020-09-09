const ADD_TODO = 'TODO/ADD_TODO';
const LOAD_TODOS = 'TODO/LOAD_TODOS';
const CHANGE_TODO = 'TODO/CHANGE_TODO';
const DELETE_TODO = 'TODO/DELETE_TODO';

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
            return {...state, todos: state.todos.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)};
        case DELETE_TODO:
            return {...state, todos: state.todos.filter(todo => todo.id !== action.payload)};
        default:
            return state;
    }
};

export const addTodoAC = (title, id = Date.now(), completed = false) => ({
    type: ADD_TODO,
    payload: {id, title, completed}
});

export const loadTodosAC = (payload) => ({
    type: LOAD_TODOS,
    payload
});

export const loadTodosThunk = (callback = () => null) => async dispatch => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
        const json = await response.json();
        dispatch(loadTodosAC(json));
        if(callback && typeof callback === 'function') {
            callback();
        }
};

export const changeTodoAC = (payload) => ({
    type: CHANGE_TODO,
    payload
});

export const deleteTodoAC = (payload) => ({
    type: DELETE_TODO,
    payload
});