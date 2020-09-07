import {applyMiddleware, combineReducers, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import {todoReducer} from "./todoReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    todo: todoReducer,
});

export const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
));