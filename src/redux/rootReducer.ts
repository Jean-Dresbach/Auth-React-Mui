import { persistReducer } from "redux-persist"
import { combineReducers } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"

import themeReducer from "./modules/themes/themeSlice"
import usersReducer from "./modules/user/userSlice"

const rootReducer = combineReducers({
  theme: themeReducer,
  users: usersReducer
})

export const persistedReducer = persistReducer(
  {
    key: "auth",
    storage
  },
  rootReducer
)
