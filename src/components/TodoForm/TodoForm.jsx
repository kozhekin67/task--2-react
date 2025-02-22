import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { doneTodos } from '../..//store/todoSlice';
import Input from '../Input/Input';
import Checkbox from '../Checkbox/Checkbox';

import cx from 'classnames';

import s from './TodoForm.module.scss';

const TodoForm = ({ text, handleInput, addTodo }) => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const doneTodosHandler = (event) => {
    dispatch(doneTodos({ checked: event.target.checked }));
  };

  const doneTodosAll = todos.length > 0 && todos.every((todo) => todo.done);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (text.trim() !== '') {
      addTodo(text);
      handleInput('');
    }
  };

  return (
    <>
      {todos.length !== 0 && (
        <label className={cx(s.checkAllTask)}>
          <Checkbox
            className={cx(s.checkAllTask__customButton)}
            onchange={(event) => doneTodosHandler(event)}
            checked={doneTodosAll}
          />
          <span className={cx(s.checkAllTask__arrowButton)}></span>
        </label>
      )}
      <form className={cx(s.formGroup)} onSubmit={onSubmitHandler}>
        <Input
          className={cx(s.formGroup__taskInput)}
          placeholder="What needs to be done?"
          value={text}
          onChange={(e) => handleInput(e.target.value)}
        />
      </form>
    </>
  );
};

export default TodoForm;
