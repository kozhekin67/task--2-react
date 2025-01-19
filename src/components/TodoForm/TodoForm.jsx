import { useState, React } from 'react';
import Checkbox from '../Checkbox/Checkbox';

import cx from 'classnames';

import s from './TodoForm.module.scss';

const TodoForm = ({ addTodo, todos, doneTodos }) => {
  const [text, setText] = useState('');
  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <>
      {todos.length !== 0 && (
        <label className={cx(s.checkAllTask, s.checkAllTask)}>
          <Checkbox
            className={cx(s.checkAllTask__customButton)}
            onchange={(event) => doneTodos(event)}
          />
          <span className={cx(s.checkAllTask__arrowButton)}></span>
        </label>
      )}
      <form className={cx(s.formGroup)} onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={cx(s.formGroup__taskInput)}
        />
      </form>
    </>
  );
};

export default TodoForm;
