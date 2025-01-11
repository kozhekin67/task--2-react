import React from 'react';

import Todo from '../Todo/Todo';
// import cx from 'classnames';

// import s from './TodoForm.module.scss';

const TodoList = ({ todos, deleteTodo, doneTodo }) => {
  return todos.map((todo) => (
    <Todo
      key={todo.id}
      todo={todo}
      deleteTodo={deleteTodo}
      doneTodo={doneTodo}
    />
  ));
};

export default TodoList;
