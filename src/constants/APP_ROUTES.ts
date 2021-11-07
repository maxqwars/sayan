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

import { HomePage, SettingsPage, SearchPage, BookmarksPage } from "../pages";
import IRoute from "../typings/IRoute";

const APP_ROUTES: IRoute[] = [
    {
        path: '/home',
        exact: true,
        component: HomePage
    },
    {
        path: '/settings',
        exact: true,
        component: SettingsPage
    },
    {
        path: '/search',
        exact: true,
        component: SearchPage
    },
    {
        path: '/bookmarks',
        exact: true,
        component: BookmarksPage
    },
    // {
    //     exact: false,
    //     path: '/',
    //     redirect: '/home'
    // }
]

export default APP_ROUTES