import { React } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { addTodo, doneTodos } from '../..//store/todoSlice';
import Input from '../Input/Input';
import Checkbox from '../Checkbox/Checkbox';

import s from './TodoForm.module.scss';

const TodoForm = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const doneTodosHandler = (event) => {
    dispatch(doneTodos({ checked: event.target.checked }));
  };

  const doneTodosAll = todos.length > 0 && todos.every((todo) => todo.done);

  const addTodoHandler = (text) => {
    dispatch(addTodo({ text }));
  };

  const onsubmitHandler = (values, { resetForm }) => {
    if (values.enteringTask.trim() !== '') {
      addTodoHandler(values.enteringTask);
      resetForm();
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

      <Formik initialValues={{ enteringTask: '' }} onSubmit={onsubmitHandler}>
        {({ values, handleChange }) => (
          <Form className={s.formGroup}>
            <Input
              name="enteringTask"
              className={s.formGroup__taskInput}
              placeholder="What needs to be done?"
              value={values.enteringTask}
              onChange={handleChange}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TodoForm;
