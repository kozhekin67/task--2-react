import React from 'react';

import Todo from '../Todo/Todo';
// import cx from 'classnames';

// import s from './TodoForm.module.scss';

const TodoList = ({ todos, deleteTodo }) => {
  return todos.map((todo, index) => (
    <Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo} />
  ));
};

export default TodoList;
