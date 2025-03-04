import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { doneTodos } from '../..//store/todoSlice';
import Input from '../Input/Input';
import Checkbox from '../Checkbox/Checkbox';

import s from './TodoForm.module.scss';

const TodoForm = ({ text, handleInput, addTodo }) => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const addTodoTextHandler = (event) => handleInput(event.target.value);
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
    <div className={s.root}>
      {todos.length !== 0 && (
        <label className={s.checkAllTask}>
          <Checkbox
            className={s.checkAllTask__customButton}
            onChange={doneTodosHandler}
            checked={doneTodosAll}
          />
          <span className={s.checkAllTask__arrowButton}></span>
        </label>
      )}
      <form className={s.formGroup} onSubmit={onSubmitHandler}>
        <Input
          className={s.formGroup__taskInput}
          placeholder="What needs to be done?"
          value={text}
          onChange={addTodoTextHandler}
        />
      </form>
    </div>
  );
};

export default TodoForm;
