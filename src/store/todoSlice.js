import { createSlice } from '@reduxjs/toolkit';
import { formattedText } from '../utils/formattedText';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    filter: 'all',
  },

  reducers: {
    addTodo(state, action) {
      console.log(state);
      state.todos.push({
        text: formattedText(action.payload.text),
        done: false,
        id: Date.now(),
      });
    },

    deleteTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },

    doneTodo(state, action) {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, done: !todo.done }
          : { ...todo }
      );
    },

    doneTodos(state, action) {
      const { checked } = action.payload;
      state.todos = state.todos.map((todo) => ({
        ...todo,
        done: checked,
      }));
    },

    deleteDoneTodos(state) {
      state.todos = state.todos.filter((todo) => !todo.done);
    },

    editTextTodo(state, action) {
      const newText = action.payload.newText;
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, text: newText } : { ...todo }
      );
    },

    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  doneTodo,
  doneTodos,
  deleteDoneTodos,
  editTextTodo,
  setFilter,
} = todoSlice.actions;

export const selectFilteredTodos = (state) => {
  const { todos, filter } = state.todos;
  switch (filter) {
    case 'active':
      return todos.filter((todo) => !todo.done);
    case 'completed':
      return todos.filter((todo) => todo.done);
    default:
      return todos;
  }
};

export default todoSlice.reducer;
