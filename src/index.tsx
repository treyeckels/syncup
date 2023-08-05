import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
  IonApp,
  // IonRouterOutlet as Switch,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonItem,
  IonLabel,
  IonList
} from '@ionic/react';
import { personCircleOutline } from 'ionicons/icons';
import { IonReactRouter as Router } from '@ionic/react-router';
import { BrowserRouter, Redirect, Route, Link, Switch } from 'react-router-dom';
import { store } from './store';
import { App } from './app';
import { ProfileRoute } from './pages/profile/';
import { EventsRoute } from './pages/events/';
import { GroupsRoute } from './pages/groups/';

render(
  <Provider store={store}>
    <BrowserRouter>
      <>
        <IonApp>
          <IonMenu contentId="main-content">
            <IonHeader>
              <IonToolbar>
                <IonTitle>Menu Content</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonList lines="full">
                <IonItem>
                  <IonLabel>
                    <Link className="menu-link" to="/profile">
                      Profile
                    </Link>
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <Link className="menu-link" to="/events">
                      Events
                    </Link>
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <Link className="menu-link" to="/groups">
                      Groups
                    </Link>
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <Link className="menu-link" to="/events">
                      Friends
                    </Link>
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <Link className="menu-link" to="/events">
                      Settings
                    </Link>
                  </IonLabel>
                </IonItem>
              </IonList>
            </IonContent>
          </IonMenu>
          <IonPage id="main-content">
            <IonHeader>
              <IonToolbar>
                <IonButtons slot="start">
                  <IonMenuButton></IonMenuButton>
                </IonButtons>
                <IonTitle>Menu</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
              <Switch>
                <Route exact path="/" render={() => <App />} />
                <Route exact path="/profile" render={() => <ProfileRoute />} />
                <Route exact path="/events" render={() => <EventsRoute />} />
                <Route exact path="/groups" render={() => <GroupsRoute />} />
              </Switch>
            </IonContent>
          </IonPage>
        </IonApp>
      </>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

/**
 * Refernces
 * - Redux Toolkit v1.3.0 Docs
 *   https://redux-toolkit.js.org/usage/usage-with-typescript#createasyncthunk
 * - Ionic Framework v5 Docs
 *   https://ionicframework.com/docs/components
 * - React Advanced Guides
 *   https://reactjs.org/docs/code-splitting.html#reactlazy
 * - Angular Style Guide
 *   https://angular.io/guide/styleguide#file-structure-conventions
 * - NgRx + Facades: Better State Management
 *   https://medium.com/@thomasburlesonIA/ngrx-facades-better-state-management-82a04b9a1e39
 * - TypeScript Deep Dive
 *   https://basarat.gitbook.io/typescript/main-1/defaultisbad
 */
