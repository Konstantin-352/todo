import React from 'react';
import styles from './TodoItem.module.css'
import deleteIcon from './delete.svg'

const TodoItem = ({id, todo, changeTodo, deleteTodo}) => {
    return (
        <div className={styles.item}>
            <input type="checkbox" className={styles.input} onChange={() => {changeTodo(todo.id)}} checked={todo.completed}/>
            <strong className={styles.id}>{id}</strong>
            <span className={todo.completed ? `${styles.text} ${styles.done}` : styles.text}>{todo.title}</span>
            <div className={styles.delete} onClick={() => {deleteTodo(todo.id)}}>
                <img src={deleteIcon} alt=""/>
            </div>
        </div>
    )
};

export default TodoItem;