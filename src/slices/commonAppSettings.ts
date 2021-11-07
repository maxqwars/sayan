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

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICommonAppSettings {
  apiServerUrl: string | null;
  enableDoh: boolean | null;
}

const initialState = {
  apiServerUrl: null,
  enableDoh: null,
} as ICommonAppSettings;

const commonAppSettingsSlice = createSlice({
  name: "common-app-settings",
  initialState,
  reducers: {
    setApiServerUrl(state, action: PayloadAction<string | null>) {
      state.apiServerUrl = action.payload;
    },
    setDoh(state, action: PayloadAction<boolean | null>) {
      state.enableDoh = action.payload;
    },
  },
});

export const { setApiServerUrl, setDoh } = commonAppSettingsSlice.actions;
export default commonAppSettingsSlice.reducer;
