import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import thunk from "redux-thunk";
import { appReducer } from "./configStore";
import storage from 'redux-persist/lib/storage'
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, appReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, ...getDefaultMiddleware()],
});

export default store;
