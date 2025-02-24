import React from 'react';
import Todo from '../Todo/Todo';

const TodoList = ({ todos }) => {
  return todos.map((todo) => <Todo key={todo.id} {...todo} />);
};

export default TodoList;
