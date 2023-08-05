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
import { Group } from './Group';
import { addGroupMembers } from '../../store/groups2';
export const Groups = () => {
  const modal = React.useRef(null);

  // const [present, dismiss] = useIonModal(Modal, {
  //   onDismiss: (data, role) => handleDismiss(data, role)
  // });

  const [currentFriendGroup, setCurrentFriendGroup] = React.useState([]);
  const [isFriendModalIsOpen, setIsFriendModalIsOpen] = React.useState(false);
  const [currentGroup, setCurrentGroup] = React.useState(0);
  const [selectedFriends, setSelectedFriends] = React.useState([]);

  const groups = useSelector((state) => state.groups.groups);
  const friends = useSelector((state) => state.friends.friends);
  const dispatch = useDispatch();

  const handleAddSelectedToGroup = () => {
    dispatch(
      addGroupMembers({
        groupId: currentGroup,
        friendsIds: selectedFriends
      })
    );
    setIsFriendModalIsOpen(false);
  };

  const handleSelectFriendsChange = (friendId) => {
    setSelectedFriends([...selectedFriends, friendId]);
  };

  const handleAddFriendToGroup = (friends, groupId) => {
    console.log('add friend');
    setCurrentFriendGroup(friends);
    setIsFriendModalIsOpen(true);
    setCurrentGroup(groupId);
  };

  const removeFriendFromGroup = () => {
    console.log('remove friend');
  };

  return (
    <>
      <h1 className="page-title">Groups</h1>
      {groups.map((group) => {
        return (
          <Group addFriendToGroup={handleAddFriendToGroup} group={group} />
        );
      })}

      <IonModal
        expand="block"
        ref={modal}
        isOpen={isFriendModalIsOpen}
        onDidDismiss={() => setIsFriendModalIsOpen(false)}
        initialBreakpoint={0.25}
        breakpoints={[0, 0.25, 0.5, 0.75]}
        backdropDismiss={() => setIsFriendModalIsOpen(false)}
      >
        <IonContent className="ion-padding">
          <IonSearchbar
            onClick={() => console.log('search')}
            placeholder="Search"
          ></IonSearchbar>
          <IonList>
            {friends
              .filter(
                (friend) =>
                  !currentFriendGroup.some(
                    (current) => current.id === friend.id
                  )
              )
              .map((friend) => {
                return (
                  <>
                    <IonGrid>
                      <IonRow style={{ alignItems: 'center' }}>
                        <IonCol size="auto">
                          <IonCheckbox
                            onClick={() => handleSelectFriendsChange(friend.id)}
                          ></IonCheckbox>
                        </IonCol>

                        <IonCol>
                          <IonItem>
                            <EntityLockup item={friend} />
                          </IonItem>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </>
                );
              })}
          </IonList>
        </IonContent>
        <IonButton fill="clear" onClick={() => handleAddSelectedToGroup()}>
          Add Selected
        </IonButton>
        <IonButton fill="clear" onClick={() => setIsFriendModalIsOpen(false)}>
          Cancel
        </IonButton>
      </IonModal>
    </>
  );
};
