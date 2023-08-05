import { createAsyncThunk } from '@reduxjs/toolkit';
import { featureKey } from '../states';
import { GroupsInitialState } from '../states';
import { FriendsInitialState as friendsState } from '../../friends/states';

export const fetchAllGroups = createAsyncThunk(
  `${featureKey}/fetchAll`,
  async () => {
    const groups = [];
    return { groups };
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

export const editGroupName = createAsyncThunk(
  `${featureKey}/editGroupName`,
  async (arg, { rejectWithValue, getState }) => {
    try {
      const { groupId, name } = arg;
      const { groups } = getState();
      const idx = groups.groups.findIndex((group) => group.id === groupId);
      const updatedGroup = { ...groups.groups[idx], name };
      debugger;
      const val = await Promise.resolve({ groupId, updatedGroup });
      return val;
    } catch (e) {
      debugger;
      return rejectWithValue('Opps there seems to be an error');
    }
  }
);

export const addGroupMembers = createAsyncThunk(
  `${featureKey}/addGroupMembers`,
  async (arg, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          body: JSON.stringify({ foo: 'bar' }),
          header: {
            'Content-Type': 'application/json'
          }
        }
      );
      const data = await response.json();
      // return data;

      const { groupId, friendsIds } = arg;
      const newFriends = friendsIds.map((id) => {
        const friend = friendsState.friends.find((friend) => friend.id === id);
        return {
          name: friend.name,
          id: friend.id
        };
      });
      const newGroupMembers = [
        ...GroupsInitialState.groups[groupId].friends,
        ...newFriends
      ];
      const val = await Promise.resolve({ groupId, newGroupMembers });
      return val;
    } catch (err) {
      // You can choose to use the message attached to err or write a custom error
      return rejectWithValue('Opps there seems to be an error');
    }

    // console.log('friend state', friendsState);
    // // new Promise((resolve, reject) => {
    // //   const { groupId, friendsIds } = arg;
    // //   const newFriends = friendsIds.map((id) => {
    // //     const friend = friendsState.friends.find((friend) => friend.id === id);
    // //     return {
    // //       name: friend.name,
    // //       id: friend.id
    // //     };
    // //   });
    // //   const newGroupMembers = [
    // //     ...GroupsInitialState.groups[groupId].friends,
    // //     ...newFriends
    // //   ];
    // //   //resolve({ groupId, newGroupMembers });
    // //   return thunkAPI.fulfillWithValue({ groupId, newGroupMembers });
    // // });

    // const { groupId, friendsIds } = arg;
    // const newFriends = friendsIds.map((id) => {
    //   const friend = friendsState.friends.find((friend) => friend.id === id);
    //   return {
    //     name: friend.name,
    //     id: friend.id
    //   };
    // });
    // const newGroupMembers = [
    //   ...GroupsInitialState.groups[groupId].friends,
    //   ...newFriends
    // ];

    // return fulfillWithValue({ groupId, newGroupMembers });

    // const result = await todoService.update(id, todo);
    // return { todo: result };
  }
);

// export const removeTodo = createAsyncThunk(
//   `${featureKey}/remove`,
//   async (arg: { id: string }) => {
//     const { id } = arg;
//     await todoService.remove(id);
//     return { id };
//   }
// );
