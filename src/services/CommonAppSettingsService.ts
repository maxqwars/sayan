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

import { Storage } from "@capacitor/storage";

enum COMMON_SETTINGS_KEYS_ENUM {
  API_SERVER = "API_SERVER", //? API SERVER BASE URL
  ENABLE_DOH = "ENABLE_DOH", //? DOH - DNS OVER HTTPS
}

class CommonAppSettingsService {
  async getApiServer() {
    const { value } = await Storage.get({
      key: COMMON_SETTINGS_KEYS_ENUM.API_SERVER,
    });
    return value;
  }

  async setApiServer(url: string) {
    await Storage.set({
      key: COMMON_SETTINGS_KEYS_ENUM.API_SERVER,
      value: url,
    });
  }

  getDoh() {}
  setDoh() {}
}

export default new CommonAppSettingsService();
