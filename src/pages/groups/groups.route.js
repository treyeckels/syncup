import { IonRouterOutlet as Switch } from '@ionic/react';
import * as React from 'react';
import { Suspense } from 'react';
import { Route } from 'react-router-dom';

import { Groups } from './Groups';

export const GroupsRoute = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/groups" component={Groups} />
        {/* <Route exact path="/todos/:id" component={TodoDetailPage} /> */}
      </Switch>
    </Suspense>
  );
};
