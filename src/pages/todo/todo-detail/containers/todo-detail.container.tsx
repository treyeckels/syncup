import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { todoSelector, fetchTodo } from '../../../../store/todo';
// import { useTodoStore } from '../../../../store';
import { TodoDetail } from '../components';

type Props = {
  id: string;
};

export const TodoDetailContainer: React.FC<Props> = props => {
  const { id } = props;
  const dispatch = useDispatch();
  const todo = useSelector(todoSelector);
  // const { todo, fetch } = useTodoStore();

  useEffect(() => {
    dispatch(fetchTodo({ id }));
  }, [id, dispatch]);

  // useEffect(() => {
  //   fetch({ id });
  // }, [id, fetch]);

  return todo && <TodoDetail todo={todo} />;
};
