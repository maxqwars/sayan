// Copyright (C) 2021 Maxim "maxqwars" Maximenko
//
// This file is part of sayan-app.
//
// sayan-app is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// sayan-app is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with sayan-app.  If not, see <http://www.gnu.org/licenses/>.

import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  homeOutline,
  searchOutline,
  bookmarkOutline,
  settingsOutline,
} from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

/* App code */
import { AppRoutes } from "./components";
import APP_ROUTES from "./constants/APP_ROUTES";
import { useTranslation } from "react-i18next";
import "./i18n";

(() => {
  if (process.env.NODE_ENV === 'development') {
    console.log(process.env)
  }
})();

const App = () => {
  const { t } = useTranslation();
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <AppRoutes appRoutes={APP_ROUTES}></AppRoutes>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="Home" href="/home">
              <IonIcon icon={homeOutline} />
              <IonLabel>{t("tabBarHomeLabel")}</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Search" href="/search">
              <IonIcon icon={searchOutline} />
              <IonLabel>{t("tabBarSearchLabel")}</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Bookmarks" href="/bookmarks">
              <IonIcon icon={bookmarkOutline} />
              <IonLabel>{t("tabBarBookmarksLabel")}</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Settings" href="/settings">
              <IonIcon icon={settingsOutline} />
              <IonLabel>{t("tabBarSettingsLabel")}</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
