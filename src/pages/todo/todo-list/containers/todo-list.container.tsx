import { unwrapResult } from '@reduxjs/toolkit';
import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  isFetchingSelector,
  todosSelector,
  fetchAllTodos
} from '../../../../store/todo';
// import { useTodoStore } from '../../../../store';
import { TodoListComponent } from '../components';

type Props = {
  offset: number;
  limit: number;
};

export const TodoListContainer: React.FC<Props> = props => {
  const { offset, limit } = props;
  const dispatch = useDispatch();
  const isFetching = useSelector(isFetchingSelector);
  const todos = useSelector(todosSelector);
  // const { isFetching, todos, fetchAll } = useTodoStore();

  useEffect(() => {
    dispatch(fetchAllTodos({ offset, limit }))
      .then(unwrapResult)
      .then(payload => {
        console.log({ payload });
      })
      .catch(error => {
        console.log({ error });
      });
  }, [offset, limit, dispatch]);

  // useEffect(() => {
  //   fetchAll({ offset, limit })
  //     .then(payload => {
  //       console.log({ payload });
  //     })
  //     .catch(error => {
  //       console.log({ error });
  //     });
  // }, [offset, limit, fetchAll]);

  return <TodoListComponent isFetching={isFetching} todos={todos} />;
};
