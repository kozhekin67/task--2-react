import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import cx from 'classnames';

import { deleteTodo, doneTodo, editTextTodo } from '../..//store/todoSlice';
import { formattedText } from '../../utils/formattedText';
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
    formattedText(text);
    setNewText(text);
  };

  const doubleClickHandler = () => openingEditorHandler(id);
  const doneTodoHandler = () => dispatch(doneTodo({ id }));
  const deleteTodoHandler = () => dispatch(deleteTodo({ id }));
  const modifiedTextHandler = (event) => setNewText(event.target.value);

  const [newText, setNewText] = useState(text);

  const editTextTodoHandler = (id, newText) => {
    dispatch(editTextTodo({ id, newText: formattedText(newText) }));
  };

  const closingEditor = () => {
    if (newText !== '') {
      editTextTodoHandler(id, newText);
      openingEditorHandler(null);
    } else {
      dispatch(deleteTodo({ id }));
    }
  };

  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'Enter':
        closingEditor();
        break;
      case 'Escape':
        openingEditorHandler(null);
        setNewText(text);
        break;
      default:
        break;
    }
  };

  return (
    <div className={cx(s.task, { [s.task_done]: done })}>
      <label className={s.customCheckbox}>
        <Checkbox className={s.checkbox} onChange={doneTodoHandler} />
        <p className={s.checkboxBlock}></p>
      </label>
      <div className={s.text} onDoubleClick={doubleClickHandler}>
        {text}
        {taskEditor === id && (
          <Textarea
            className={s.editTodo}
            value={newText}
            onChange={modifiedTextHandler}
            onKeyDown={handleKeyDown}
            onBlur={closingEditor}
            autoFocus
          />
        )}
      </div>

      <Button
        className={s.delete}
        image={<Delete className={s.delete__icon} />}
        onClick={deleteTodoHandler}
      />
    </div>
  );
};

export default Todo;
