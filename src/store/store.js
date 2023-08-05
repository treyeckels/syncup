import {
  configureStore,
  combineReducers,
  getDefaultMiddleware
} from '@reduxjs/toolkit';

import * as friends from './friends';
import * as groups from './groups2';

/**
 * Reducer
 */
const reducer = combineReducers({
  [friends.featureKey]: friends.reducer,
  [groups.featureKey]: groups.reducer
});

/**
 * MIddleware
 */
const middleware = getDefaultMiddleware({
  thunk: true,
  immutableCheck: true,
  serializableCheck: true
});

/**
 * Store
 */
export const store = configureStore({
  reducer,
  middleware,
  devTools: true
});

/**
 * Types
 */
export type State = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
