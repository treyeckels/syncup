import { IonPage } from '@ionic/react';
import * as React from 'react';
import { useParams } from 'react-router-dom';

import { TodoDetailContainer } from './containers';

interface RouterParams {
  id: string;
}

export const TodoDetailPage: React.FC = () => {
  const { id } = useParams<RouterParams>();

  return (
    <IonPage>
      <TodoDetailContainer id={id} />
    </IonPage>
  );
};
