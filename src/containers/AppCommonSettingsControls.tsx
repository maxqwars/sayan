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
import { setApiServerUrl } from "../slices/commonAppSettings";
import CommonAppSettingsService from "../services/CommonAppSettingsService";
import { CENTERED_COLUMN_LAYOUT } from "../constants/CENTERED_COLUMN_LAYOUT";

interface IAppCommonSettingsControls {}

const AppCommonSettingsControls = (props: IAppCommonSettingsControls) => {
  const { t } = useTranslation();
  const apiServerUrl = useAppSelector(
    (state) => state.commonAppSettings.apiServerUrl
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (apiServerUrl === null) {
      CommonAppSettingsService.getApiServerUrl().then((value) =>
        value === null
          ? dispatch(setApiServerUrl(""))
          : dispatch(setApiServerUrl(value))
      );
    }
  });

  return (
    <ConfigSection title={t("common-app-settings-title")}>
      {apiServerUrl === null ? null : (
        <IonCol {...CENTERED_COLUMN_LAYOUT}>
          <ApiServerControl
            currentUrl={apiServerUrl}
            onConfigPropertyChange={(url: string) => {
              console.log(url);
              CommonAppSettingsService.setApiServerUrl(url).then(() => {
                dispatch(setApiServerUrl(url));
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
