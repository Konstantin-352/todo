import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {todoReducer} from "./todoReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    todo: todoReducer,
});

export const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));