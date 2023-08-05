import { IonRouterOutlet as Switch } from '@ionic/react';
import * as React from 'react';
import { Suspense } from 'react';
import { Route } from 'react-router-dom';

import { Events } from './Events';

export const EventsRoute = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/events" component={Events} />
        {/* <Route exact path="/todos/:id" component={TodoDetailPage} /> */}
      </Switch>
    </Suspense>
  );
};
