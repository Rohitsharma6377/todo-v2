import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTodos = createAsyncThunk('todo/fetchTodos', async () => {
  const res = await axios.get('/api/todo', { withCredentials: true });
  return res.data;
});

export const addTodo = createAsyncThunk('todo/addTodo', async (todo) => {
  const res = await axios.post('/api/todo', todo, { withCredentials: true });
  return res.data;
});

export const updateTodo = createAsyncThunk('todo/updateTodo', async ({ id, data }) => {
  const res = await axios.put(`/api/todo/${id}`, data, { withCredentials: true });
  return res.data;
});

export const deleteTodo = createAsyncThunk('todo/deleteTodo', async (id) => {
  await axios.delete(`/api/todo/${id}`, { withCredentials: true });
  return id;
});

const todoSlice = createSlice({
  name: 'todo',
  initialState: { todos: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const idx = state.todos.findIndex(t => t._id === action.payload._id);
        if (idx !== -1) state.todos[idx] = action.payload;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter(t => t._id !== action.payload);
      });
  },
});

export default todoSlice.reducer;
