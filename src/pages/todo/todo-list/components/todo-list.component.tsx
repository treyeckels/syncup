import {
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonList,
  IonIcon,
  IonItem,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonLoading,
  IonSearchbar,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { add, trash } from 'ionicons/icons';
import * as React from 'react';

import { Todo } from '../../../../models';

type Props = {
  isFetching?: boolean;
  todos: Todo[];
  onClickAdd?: () => void;
  onClickDelete?: (id: string) => void;
};

export const TodoListComponent: React.FC<Props> = props => {
  const { isFetching, todos, onClickAdd, onClickDelete } = props;

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Todo List</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {todos.map(todo => (
            <IonItemSliding key={todo.id}>
              <IonItem routerLink={`/todos/${todo.id}`}>{todo.text}</IonItem>
              <IonItemOptions side="end">
                <IonItemOption
                  color="danger"
                  onClick={() => onClickDelete && onClickDelete(todo.id)}
                >
                  <IonIcon slot="icon-only" icon={trash} />
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton onClick={onClickAdd}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
      <IonLoading
        isOpen={!!isFetching && todos.length === 0}
        message="Loading..."
      />
    </>
  );
};
