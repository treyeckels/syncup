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
  IonContent,
  IonCheckbox,
  IonButtons,
  IonHeader,
  IonToolbar,
  IonTitle,
  useIonModal
} from '@ionic/react';
import {
  closeCircleOutline,
  pencilOutline,
  checkmarkOutline
} from 'ionicons/icons';
import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';
import { EntityLockup } from '../../components/EntityLockup/EntityLockup';
import { editGroupName } from '../../store/groups2';

export const Group = ({ group, addFriendToGroup }) => {
  const dispatch = useDispatch();

  // const [present, dismiss] = useIonModal(Modal, {
  //   onDismiss: (data, role) => handleDismiss(data, role)
  // });

  const [isEditingGroupName, setIsEditingGroupName] = React.useState(false);
  const [groupName, setGroupName] = React.useState(group.name);

  const handleAddFriendToGroup = (friends) => {
    console.log('add friend');
    addFriendToGroup(friends, group.id);
  };

  const removeFriendFromGroup = () => {
    console.log('remove friend');
  };

  const handleEditGroupTitle = () => {
    setIsEditingGroupName(true);
  };

  const handleSaveGroupTitle = () => {
    setIsEditingGroupName(false);
    debugger;
    dispatch(
      editGroupName({
        groupId: group.id,
        name: groupName
      })
    );
  };

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>
          {isEditingGroupName ? (
            <>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonInput
                      onIonChange={(evt) => setGroupName(evt.target.value)}
                      label="Outline input"
                      labelPlacement="floating"
                      fill="outline"
                      placeholder="Enter text"
                      value={groupName}
                      style={{ border: '1px solid black' }}
                    ></IonInput>
                  </IonCol>

                  <IonCol size="auto">
                    <span style={{ lineHeight: 2.3 }}>
                      <IonIcon
                        onClick={handleSaveGroupTitle}
                        icon={checkmarkOutline}
                      ></IonIcon>
                    </span>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </>
          ) : (
            <>
              <span
                style={{
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  marginRight: 7
                }}
              >
                {group.name}
              </span>
              <span
                style={{
                  lineHeight: '12px',
                  fontSize: 15,
                  display: 'inline-block',
                  verticalAlign: 'middle'
                }}
              >
                <IonIcon
                  onClick={handleEditGroupTitle}
                  icon={pencilOutline}
                ></IonIcon>
              </span>
            </>
          )}
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          {group.friends.map((friend) => {
            return (
              <IonItem>
                <IonAvatar slot="start">
                  <img alt="Silhouette" src="https://i.pravatar.cc/50" />
                </IonAvatar>
                <IonLabel>{friend.name}</IonLabel>
                <IonIcon
                  onClick={removeFriendFromGroup}
                  icon={closeCircleOutline}
                ></IonIcon>
              </IonItem>
            );
          })}
        </IonList>
      </IonCardContent>
      <IonButton
        fill="clear"
        onClick={() => handleAddFriendToGroup(group.friends)}
      >
        Add Friend
      </IonButton>
      <IonButton
        fill="clear"
        onClick={() => handleAddFriendToGroup(group.friends)}
      >
        Delete Group
      </IonButton>
    </IonCard>
  );
};
