import { getDefaultMiddleware, SerializedError } from '@reduxjs/toolkit';
import configureStore from 'redux-mock-store';

import { Todo } from '../../../models';
import { todoService } from '../../../services';

import {
  fetchAllTodos
  // fetchTodo,
  // createTodo,
  // updateTodo,
  // deleteTodo
} from './todo.action';

const middlewares = getDefaultMiddleware();
const mockStore = configureStore(middlewares);

describe('actions', () => {
  it('should fulfill fetchAllTodos', async () => {
    const todos: Todo[] = [];

    (todoService as any).fetchAll = jest.fn().mockResolvedValue(todos);

    const store = mockStore();
    await store.dispatch(fetchAllTodos({ offset: 0, limit: 10 }));
    const actions = store.getActions();

    expect(actions[0].type).toEqual(fetchAllTodos.pending.type);
    expect(actions[1].type).toEqual(fetchAllTodos.fulfilled.type);
    expect(actions[1].payload).toEqual({ todos });
  });

  it('should reject fetchAllTodos', async () => {
    const error: SerializedError = {};

    (todoService as any).fetchAll = jest.fn().mockRejectedValue(error);

    const store = mockStore();
    await store.dispatch(fetchAllTodos({ offset: 0, limit: 10 }));
    const actions = store.getActions();

    expect(actions[0].type).toEqual(fetchAllTodos.pending.type);
    expect(actions[1].type).toEqual(fetchAllTodos.rejected.type);
    expect(actions[1].error).toEqual(error);
  });
});
