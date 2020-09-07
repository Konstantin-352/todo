import React from 'react';
import s from './App.module.css';
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className={s.App}>
      <AddTodo/>
      <TodoList/>
    </div>
  );
}

export default App;
