import { createAsyncThunk } from '@reduxjs/toolkit';
import { featureKey } from '../states';

export const fetchAllFriends = createAsyncThunk(
  `${featureKey}/fetchAll`,
  async () => {
    const friends = [];
    return { friends };
  }
);

// export const fetchTodo = createAsyncThunk(
//   `${featureKey}/fetch`,
//   async (arg: { id: string }) => {
//     const { id } = arg;
//     const result = await todoService.fetch(id);
//     return { todo: result };
//   }
// );

// export const createTodo = createAsyncThunk(
//   `${featureKey}/create`,
//   async (arg: { todo: TodoCreateDto }) => {
//     const { todo } = arg;
//     const result = await todoService.create(todo);
//     return { todo: result };
//   }
// );

// export const updateTodo = createAsyncThunk(
//   `${featureKey}/update`,
//   async (arg: { id: string; todo: TodoUpdateDto }) => {
//     const { id, todo } = arg;
//     const result = await todoService.update(id, todo);
//     return { todo: result };
//   }
// );

// export const removeTodo = createAsyncThunk(
//   `${featureKey}/remove`,
//   async (arg: { id: string }) => {
//     const { id } = arg;
//     await todoService.remove(id);
//     return { id };
//   }
// );
