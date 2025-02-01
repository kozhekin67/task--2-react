import React from 'react';
import Button from '../Button/Button';

import cx from 'classnames';
import s from './TodosActions.module.scss';

const TodosActions = ({
  deleteDoneTodos,
  todosCounter,
  donetodosCounter,
  filterTodos,
}) => {
  return (
    <div className={cx(s.bottomPanel)}>
      <div className={cx(s.bottomPanel__element)}>
        <span>{`Items left ${todosCounter}`}</span>
      </div>
      <Button
        className={cx(s.bottomPanel__element)}
        text="All"
        onClick={() => filterTodos('all')}
      />
      <Button
        className={cx(s.bottomPanel__element)}
        text="Active"
        onClick={() => filterTodos('active')}
      />
      <Button
        className={cx(s.bottomPanel__element)}
        text="Completed"
        onClick={() => filterTodos('completed')}
      />
      <Button
        className={cx(
          donetodosCounter
            ? s.bottomPanel__element
            : s.bottomPanel__element_invisible
        )}
        text="Clear completed"
        onClick={deleteDoneTodos}
      />
    </div>
  );
};

export default TodosActions;
