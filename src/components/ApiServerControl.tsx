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

import { IonButton, IonCard, IonInput, IonItem } from "@ionic/react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

interface IApiServerControl {
  currentUrl: string;
  onConfigPropertyChange: Function;
}

const ApiServerControl = (props: IApiServerControl) => {
  const { currentUrl, onConfigPropertyChange } = props;
  const { t } = useTranslation();
  const [ inputValue, setInputValue ] = useState(currentUrl)

  const onInputChange = () => {
    if (inputValue.length > 0) {
      onConfigPropertyChange(inputValue)
    }
  }

  return (
    <IonCard>
      <IonItem>
        <IonInput
          value={inputValue}
          placeholder={t("api-server-input-placeholder-label")}
          onIonChange={(e) => {
            console.log(e.detail.value!)
            setInputValue(e.detail.value!);
          }}
          onIonBlur={() => {
            inputValue.length !== 0
            	? onInputChange()
            	: setInputValue(currentUrl);
          }}
        ></IonInput>
        <IonButton
          color="primary"
          fill="clear"
          disabled={inputValue.length === 0}
          onClick={() => {
          	onInputChange();
          }}
        >
          {t("apply-label")}
        </IonButton>
      </IonItem>
    </IonCard>
  );
};

export default ApiServerControl;
