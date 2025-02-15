import React from 'react';
import Button from '../Button/Button';

import cx from 'classnames';
import s from './TodosActions.module.scss';

const TodosActions = ({
  deleteDoneTodos,
  todosCounter,
  donetodosCounter,
  filter,
  filterTodos,
}) => {
  return (
    <div className={cx(s.bottomPanel)}>
      <div className={cx(s.bottomPanel__element)}>
        <span>{`Items left ${todosCounter}`}</span>
      </div>
      <Button
        className={cx(
          filter === 'all'
            ? s.bottomPanel__element_active
            : s.bottomPanel__element
        )}
        text="All"
        onClick={() => filterTodos('all')}
      />
      <Button
        className={cx(
          filter === 'active'
            ? s.bottomPanel__element_active
            : s.bottomPanel__element
        )}
        text="Active"
        onClick={() => filterTodos('active')}
      />
      <Button
        className={cx(
          filter === 'completed'
            ? s.bottomPanel__element_active
            : s.bottomPanel__element
        )}
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
