import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';

import {
  addTodo,
  deleteDoneTodos,
  setFilter,
  selectFilteredTodos,
} from './store/todoSlice';

import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import TodosActions from './components/TodosActions/TodosActions';

import './styles/reset.scss';
import './styles/globals.scss';

import s from './App.module.scss';

function App() {
  const [text, setText] = useState('');

  const todos = useSelector((state) => state.todos.todos);
  const filter = useSelector((state) => state.todos.filter);
  const filteredTodos = useSelector(selectFilteredTodos);
  const dispatch = useDispatch();

  const addTodoHandler = () => {
    dispatch(addTodo({ text }));
  };

  const deleteDoneTodosHandler = () => {
    dispatch(deleteDoneTodos());
  };

  const todosCounterHandler = todos.filter((todo) => !todo.done).length;
  const doneTodosCounterHandler = todos.filter((todo) => todo.done).length;

  const filterTodosHandler = (newFilter) => dispatch(setFilter(newFilter));

  return (
    <div className={cx(s.App)}>
      <h1 className={cx(s.App__title)}>Todo List</h1>
      <TodoForm addTodo={addTodoHandler} text={text} handleInput={setText} />
      <TodoList todos={filteredTodos} />
      {todos.length > 0 && (
        <TodosActions
          deleteDoneTodos={deleteDoneTodosHandler}
          todosCounter={todosCounterHandler}
          donetodosCounter={doneTodosCounterHandler}
          filterTodos={filterTodosHandler}
          filter={filter}
        />
      )}
    </div>
  );
}

export default App;
