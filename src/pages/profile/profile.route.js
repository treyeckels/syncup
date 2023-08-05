import { IonRouterOutlet as Switch } from '@ionic/react';
import * as React from 'react';
import { Suspense } from 'react';
import { Route } from 'react-router-dom';

import { Profile } from './Profile';

export const ProfileRoute = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/profile" component={Profile} />
        {/* <Route exact path="/todos/:id" component={TodoDetailPage} /> */}
      </Switch>
    </Suspense>
  );
};
