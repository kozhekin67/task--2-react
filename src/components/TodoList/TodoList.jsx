import React from 'react';
// import { useSelector } from 'react-redux';
import Todo from '../Todo/Todo';
// import cx from 'classnames';

// import s from './TodoForm.module.scss';

const TodoList = ({ todos }) => {
  // const todos = useSelector((state) => state.todos.todos);

  // const filteredTodos = todos.filter((todo) => {
  //   if (filter === 'active') return !todo.done;
  //   if (filter === 'completed') return todo.done;
  //   return true;
  // });

  return todos.map((todo) => (
    <Todo
      key={todo.id}
      {...todo}
      // deleteTodo={deleteTodo}
      // doneTodo={doneTodo}
      // openingEditor={openingEditor}
      // taskEdit={taskEdit}
      // editNewText={editNewText}
    />
  ));
};

export default TodoList;
