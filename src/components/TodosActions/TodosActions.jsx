import React from 'react';
import cx from 'classnames';

import Button from '../Button/Button';

import s from './TodosActions.module.scss';

const TodosActions = ({
  deleteDoneTodos,
  todosCounter,
  donetodosCounter,
  filter,
  filterTodos,
}) => {
  const filterTodosHandler = (filter) => () => filterTodos(filter);

  return (
    <div className={s.bottomPanel}>
      <div className={s.bottomPanel__element}>
        <span>{`Items left ${todosCounter}`}</span>
      </div>
      <Button
        className={cx(s.bottomPanel__element, {
          [s.bottomPanel__element_active]: filter === 'all',
        })}
        text="All"
        onClick={filterTodosHandler('all')}
      />
      <Button
        className={cx(s.bottomPanel__element, {
          [s.bottomPanel__element_active]: filter === 'active',
        })}
        text="Active"
        onClick={filterTodosHandler('active')}
      />
      <Button
        className={cx(s.bottomPanel__element, {
          [s.bottomPanel__element_active]: filter === 'completed',
        })}
        text="Completed"
        onClick={filterTodosHandler('completed')}
      />
      <Button
        className={cx(s.bottomPanel__element, {
          [s.bottomPanel__element_invisible]: !donetodosCounter,
        })}
        text="Clear completed"
        onClick={deleteDoneTodos}
      />
    </div>
  );
};

export default TodosActions;
