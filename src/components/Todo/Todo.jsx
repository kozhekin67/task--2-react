import React, { useState } from 'react';
import cx from 'classnames';

import { ReactComponent as Delete } from '../../svg/Delete.svg';
import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';
// import Input from '../Input/Input';

import s from './Todo.module.scss';

const Todo = ({
  todo,
  deleteTodo,
  doneTodo,
  openingEditor,
  taskEdit,
  editNewText,
}) => {
  const [newText, setNewText] = useState(todo.text);

  const closingEditor = () => {
    if (newText !== '') {
      editNewText(todo.id, newText);
      openingEditor(null);
    } else {
      deleteTodo(todo.id);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      closingEditor();
    } else if (event.key === 'Escape') {
      openingEditor(null);
      setNewText(todo.text);
    }
  };

  return (
    <div className={cx(todo.done ? s.task_done : s.task)}>
      <label className={s.customCheckbox}>
        <Checkbox className={s.checkbox} onchange={() => doneTodo(todo.id)} />
        <p className={s.checkboxBlock}></p>
      </label>
      <div className={cx(s.text)} onDoubleClick={() => openingEditor(todo.id)}>
        {todo.text}
      </div>
      {taskEdit === todo.id && (
        <textarea
          className={s.editTodo}
          value={newText}
          onChange={(event) => setNewText(event.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={closingEditor}
          autoFocus
        />
      )}
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
