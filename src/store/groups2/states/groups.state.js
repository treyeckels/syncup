import { EntityState, createEntityAdapter } from '@reduxjs/toolkit';

export const featureKey = 'groups';

export const GroupsInitialState = {
  isFetching: false,
  groups: [
    {
      name: 'Best Friends',
      id: 0,
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
        }
      ]
    },
    {
      name: 'Co-Workers',
      id: 1,
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
        }
      ]
    },
    {
      name: 'Co-Workers2',
      id: 2,
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
        }
      ]
    }
  ]
};

export const adapter = createEntityAdapter();
