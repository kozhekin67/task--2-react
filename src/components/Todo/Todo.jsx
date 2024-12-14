import React from 'react';
import cx from 'classnames';

import s from './Todo.module.scss';

const Todo = ({ todo, index, deleteTodo }) => {
  return (
    <div
      data-action="edit"
      className={cx(s.task, s.task_done)}
      onDoubleClick={() => deleteTodo(index)}
    >
      <div className={cx(s.task__text)}>{todo}</div>
    </div>
  );
};

Todo.defaultProps = {};

export default Todo;
