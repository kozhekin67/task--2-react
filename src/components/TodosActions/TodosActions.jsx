import React from 'react';
import Button from '../Button/Button';

import cx from 'classnames';
import s from './TodosActions.module.scss';

const TodosActions = ({ deleteDoneTodos, todosCounter }) => {
  return (
    <div className={cx(s.bottomPanel)}>
      <div className={cx(s.bottomPanel__element)}>
        <span>{`Items left ${todosCounter}`}</span>
      </div>
      <Button className={cx(s.bottomPanel__element)} text="All" id="all" />
      <Button
        className={cx(s.bottomPanel__element)}
        text="Active"
        id="active"
      />
      <Button
        className={cx(s.bottomPanel__element)}
        text="Completed"
        id="completed"
      />
      <Button
        className={cx(s.bottomPanel__element)}
        text="Clear completed"
        onClick={deleteDoneTodos}
      />
    </div>
  );
};

export default TodosActions;
