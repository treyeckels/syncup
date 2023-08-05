import { IonRouterOutlet as Switch } from '@ionic/react';
import * as React from 'react';
import { Suspense } from 'react';
import { Route } from 'react-router-dom';

import { TodoDetailPage } from './todo-detail';
import { TodoListPage } from './todo-list';

export const TodoRoute: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/todos" component={TodoListPage} />
        <Route exact path="/todos/:id" component={TodoDetailPage} />
      </Switch>
    </Suspense>
  );
};
