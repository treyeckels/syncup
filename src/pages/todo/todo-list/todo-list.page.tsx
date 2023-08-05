import { IonPage } from '@ionic/react';
import * as React from 'react';
import { useLocation } from 'react-router-dom';

import { TodoListContainer } from './containers';

export const TodoListPage: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const offset = params.get('offset') || '0';
  const limit = params.get('limit') || '100';

  return (
    <IonPage>
      <TodoListContainer offset={+offset} limit={+limit} />
    </IonPage>
  );
};
