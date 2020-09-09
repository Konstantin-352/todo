import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import TodoItem from "./TodoItem/TodoItem";
import {changeTodoAC, deleteTodoAC, loadTodosThunk} from "../../redux/todoReducer";
import styles from './TodoList.module.css';

const TodoList = ({todos, loadTodos, changeTodo, deleteTodo}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            loadTodos(() => setLoading(false));
        }, 2000);

    }, [loadTodos]);

    if (loading) {
        return <div className={styles.loading}>Loading...</div>
    }

    return (
        <div className={styles.todoList}>
            <h1>TodoList</h1>
            {todos.length ? todos.map((todo, index) => {
                return <TodoItem id={index + 1} key={todo.id} todo={todo} changeTodo={changeTodo} deleteTodo={deleteTodo}/>
            }): <div>No todos!</div>}
            {}
        </div>
    )
};

const mapStateToPros = state => ({
    todos: state.todo.todos,
});

const mapDispatchToProps = dispatch => ({
    loadTodos: (setLoading) => dispatch(loadTodosThunk(setLoading)),
    changeTodo: (id) => dispatch(changeTodoAC(id)),
    deleteTodo: (id) => dispatch(deleteTodoAC(id))
});

export default connect(mapStateToPros, mapDispatchToProps)(TodoList);