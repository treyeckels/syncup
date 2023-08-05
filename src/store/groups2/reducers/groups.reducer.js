import { createReducer } from '@reduxjs/toolkit';

import { GroupsInitialState, adapter } from '../states';
import { fetchAllGroups, addGroupMembers, editGroupName } from '../actions';

export const reducer = createReducer(GroupsInitialState, (builder) =>
  builder
    .addCase(fetchAllGroups, (state) => {
      return { ...state, isFetching: false };
    })
    .addCase(addGroupMembers.fulfilled, (state, action) => {
      const idx = state.groups.findIndex(
        (group) => group.id === action.payload.groupId
      );

      state.groups[idx].friends = [...action.payload.newGroupMembers];

      return state;
    })
    .addCase(editGroupName.fulfilled, (state, action) => {
      debugger;
      const idx = state.groups.findIndex(
        (group) => group.id === action.payload.groupId
      );

      state.groups[idx] = action.payload.updatedGroup;

      return state;
    })
);
