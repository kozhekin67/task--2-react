import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import cx from 'classnames';

import { deleteTodo, doneTodo, editTextTodo } from '../..//store/todoSlice';
import { ReactComponent as Delete } from '../../svg/Delete.svg';
import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';
import Textarea from '../Textarea/Textarea';

import s from './Todo.module.scss';

const Todo = ({ id, text, done }) => {
  const [taskEditor, setTaskEditor] = useState(null);

  const dispatch = useDispatch();
  const openingEditorHandler = (id) => {
    setTaskEditor(id);
    setNewText(text.replace(/\s+/g, ' ').trim());
  };
  const [newText, setNewText] = useState(text);

  const editTextTodoHandler = (id, newText) => {
    const cleanedText = newText.replace(/\s+/g, ' ').trim();

    dispatch(editTextTodo({ id, newText: cleanedText }));
  };

  const closingEditor = () => {
    if (newText !== '') {
      editTextTodoHandler(id, newText);
      openingEditorHandler(null);
    } else {
      deleteTodo(id);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      closingEditor();
    } else if (event.key === 'Escape') {
      openingEditorHandler(null);
      setNewText(text);
    }
  };

  return (
    <div className={cx(done ? s.task_done : s.task)}>
      <label className={s.customCheckbox}>
        <Checkbox
          className={s.checkbox}
          onchange={() => dispatch(doneTodo({ id }))}
        />
        <p className={s.checkboxBlock}></p>
      </label>
      <div className={s.text} onDoubleClick={() => openingEditorHandler(id)}>
        {text}
        {taskEditor === id && (
          <Textarea
            className={s.editTodo}
            value={newText}
            onChange={(event) => setNewText(event.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={closingEditor}
            autoFocus
          />
        )}
      </div>

      <Button
        className={s.delete}
        image={<Delete className={s.delete__icon} />}
        onClick={() => dispatch(deleteTodo({ id }))}
      />
    </div>
  );
};

export default Todo;
