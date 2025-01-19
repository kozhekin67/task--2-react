import React, { useState } from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import TodosActions from './components/TodosActions/TodosActions';

import './styles/reset.scss';
import './styles/globals.scss';
import cx from 'classnames';

import s from './App.module.scss';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      done: false,
      id: Date.now(),
    };
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const doneTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : { ...todo }
      )
    );
  };

  const doneTodosHandler = (event) => {
    setTodos(
      todos.map((todo) =>
        event.target.checked
          ? { ...todo, done: (todo.done = true) }
          : { ...todo, done: (todo.done = false) }
      )
    );
  };

  const deleteDoneTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.done));
  };
  const todosCounterHandler = todos.filter((todo) => !todo.done).length;

  return (
    <div className={cx(s.App)}>
      <h1 className={cx(s.App__title)}>Todo List</h1>
      <TodoForm
        todos={todos}
        addTodo={addTodoHandler}
        doneTodos={doneTodosHandler}
      />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        doneTodo={doneTodoHandler}
      />
      <TodosActions
        deleteDoneTodos={deleteDoneTodosHandler}
        todosCounter={todosCounterHandler}
      />
    </div>
  );
}

export default App;
