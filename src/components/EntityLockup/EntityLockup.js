import * as React from 'react';

import {
  IonPage,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
  IonIcon,
  IonButton,
  IonInput,
  IonCol,
  IonGrid,
  IonRow,
  IonModal,
  IonSearchbar,
  IonAvatar,
  IonImg,
  IonContent
} from '@ionic/react';

import {
  closeCircleOutline,
  pencilOutline,
  checkmarkOutline
} from 'ionicons/icons';

export const EntityLockup = ({ handleRemoveItem, id, item }) => {
  const handleRemoveItemFromList = () => {
    handleRemoveItem(id);
  };

  return (
    <>
      <IonAvatar slot="start">
        <img alt="Silhouette" src="https://i.pravatar.cc/50" />
      </IonAvatar>
      <IonLabel>
        <h2>{item.name}</h2>
      </IonLabel>
      <IonIcon
        onClick={handleRemoveItemFromList}
        icon={closeCircleOutline}
      ></IonIcon>
    </>
  );
};
