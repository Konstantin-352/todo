import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import TodoItem from "./TodoItem/TodoItem";
import {changeTodoAC, loadTodosAC} from "../../redux/todoReducer";
import s from './TodoList.module.css';

const TodoList = ({todos, loadTodos, changeTodo}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            loadTodos();
            setLoading(false);
        }, 2000);

    }, [loadTodos]);

    console.log(todos);

    const changeInput = (id) => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });

        changeTodo(newTodos);
    };

    const deleteTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        changeTodo(newTodos);
    };

    if (loading) {
        return <div className={s.loading}>Loading...</div>
    }

    return (
        <div className={s.todoList}>
            <h1>TodoList</h1>
            {todos.length ? todos.map((todo, index) => {
                return <TodoItem id={index + 1} key={todo.id} todo={todo} changeInput={changeInput} deleteTodo={deleteTodo}/>
            }): loading ? null : <div>No todos!</div>}
            {}
        </div>
    )
};

const mapStateToPros = state => ({
    todos: state.todo.todos,
});

const mapDispatchToProps = dispatch => ({
    loadTodos: () => dispatch(loadTodosAC()),
    changeTodo: (payload) => dispatch(changeTodoAC(payload))
});

export default connect(mapStateToPros, mapDispatchToProps)(TodoList);