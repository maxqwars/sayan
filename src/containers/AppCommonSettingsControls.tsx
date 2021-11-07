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

import { IonCol } from "@ionic/react";
import React, { useEffect } from "react";
import { ApiServerControl, ConfigSection, DoHControl } from "../components";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setApiServer } from "../slices/commonAppSettings";
import CommonAppSettingsService from "../services/CommonAppSettingsService";
import { CENTERED_COLUMN_LAYOUT } from "../constants/CENTERED_COLUMN_LAYOUT";

interface IAppCommonSettingsControls {}

const AppCommonSettingsControls = (props: IAppCommonSettingsControls) => {
  const { t } = useTranslation();
  const apiServer = useAppSelector(
    (state) => state.commonAppSettings.apiServer
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (apiServer === null) {
      CommonAppSettingsService.getApiServer().then((value) =>
        value === null
          ? dispatch(setApiServer(""))
          : dispatch(setApiServer(value))
      );
    }
  });

  return (
    <ConfigSection title={t("commonAppSettingTitle")}>
      {apiServer === null ? null : (
        <IonCol {...CENTERED_COLUMN_LAYOUT}>
          <ApiServerControl
            currentUrl={apiServer}
            onConfigPropertyChange={(url: string) => {
              console.log(url);
              CommonAppSettingsService.setApiServer(url).then(() => {
                dispatch(setApiServer(url));
              });
            }}
          />
        </IonCol>
      )}

      <IonCol {...CENTERED_COLUMN_LAYOUT}>
        <DoHControl />
      </IonCol>
    </ConfigSection>
  );
};

export default AppCommonSettingsControls;
