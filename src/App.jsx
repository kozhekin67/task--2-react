import React, { useState } from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

import './styles/reset.scss';
import './styles/globals.scss';
import cx from 'classnames';

import s from './App.module.scss';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    setTodos([...todos, text]);
  };

  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((_, id) => id !== index));
  };

  return (
    <div className={cx(s.App)}>
      <h1 className={cx(s.App__title)}>Todo List</h1>
      <TodoForm todos={todos} addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
