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

import { configureStore } from '@reduxjs/toolkit'
import testSlice from './testSlice'

const store = configureStore({
  reducer: {
    testSlice
  },
  devTools: process.env.NODE_ENV === 'development'
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch