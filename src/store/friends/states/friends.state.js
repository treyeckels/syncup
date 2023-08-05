import { EntityState, createEntityAdapter } from '@reduxjs/toolkit';

export const featureKey = 'friends';

export const FriendsInitialState = {
  isFetching: false,
  friends: [
    {
      name: 'Trey Eckels',
      id: 0
    },
    {
      name: 'Liz Suellentrop',
      id: 1
    },
    {
      name: 'Mako',
      id: 2
    },
    {
      name: 'Missy',
      id: 3
    },
    {
      name: 'Yashoda',
      id: 4
    },
    {
      name: 'Madeline',
      id: 5
    }
  ]
};

export const adapter = createEntityAdapter();
