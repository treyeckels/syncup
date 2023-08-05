import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonLabel,
  IonList,
  IonInput,
  IonItem,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import * as React from 'react';

import { Todo, TodoUpdateDto } from '../../../../models';

type Props = {
  todo: Todo;
  onClickSave?: (todo: TodoUpdateDto) => void;
};

export const TodoDetail: React.FC<Props> = props => {
  const { todo } = props;

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/todos" />
          </IonButtons>
          <IonTitle>Detail</IonTitle>
          <IonButtons slot="end">
            <IonButton>Save</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Todo</IonLabel>
            <IonInput value={todo.text} />
          </IonItem>
        </IonList>
      </IonContent>
    </>
  );
};
