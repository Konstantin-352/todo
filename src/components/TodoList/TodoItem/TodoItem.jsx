import React from 'react';
import s from './TodoItem.module.css'
import deleteIcon from './delete.svg'

const TodoItem = ({id, todo, changeInput, deleteTodo}) => {
    return (
        <div className={s.item}>
            <input type="checkbox" className={s.input} onChange={() => {changeInput(todo.id)}} checked={todo.completed}/>
            <strong className={s.id}>{id}</strong>
            <span className={todo.completed ? `${s.text} ${s.done}` : s.text}>{todo.title}</span>
            <div className={s.delete} onClick={() => {deleteTodo(todo.id)}}>
                <img src={deleteIcon} alt=""/>
            </div>
        </div>
    )
};

export default TodoItem;