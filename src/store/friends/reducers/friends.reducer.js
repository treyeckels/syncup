import { createReducer } from '@reduxjs/toolkit';

import { FriendsInitialState, adapter } from '../states';
import { fetchAllFriends } from '../actions';

export const reducer = createReducer(FriendsInitialState, (builder) =>
  builder.addCase(fetchAllFriends, (state) => {
    return { ...state, isFetching: false };
  })
);
