import React from 'react';
import cx from 'classnames';

import { ReactComponent as Delete } from '../../svg/Delete.svg';
import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';

import s from './Todo.module.scss';

const Todo = ({ todo, deleteTodo, doneTodo }) => {
  return (
    <div data-action="edit" className={cx(todo.done ? s.task_done : s.task)}>
      <label className={s.customCheckbox}>
        <Checkbox className={s.checkbox} onchange={() => doneTodo(todo.id)} />
        <p className={s.checkboxBlock}></p>
      </label>
      <div className={cx(s.text)}>{todo.text}</div>
      <Button
        className={s.delete}
        image={<Delete className={s.delete__icon} />}
        onClick={() => deleteTodo(todo.id)}
      />
    </div>
  );
};

Todo.defaultProps = {};

export default Todo;
