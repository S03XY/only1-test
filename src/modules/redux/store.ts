import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistStore from "./persistStore";
import { persistReducer } from "redux-persist";

import newPostModalReducer from "./reducers/newPostModalReducer";

const rootReducer = combineReducers({ newPostModalReducer });

export const AppStore = configureStore({
  reducer: rootReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage: persistStore,
  blacklist: [],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof AppStore.getState>;
export type AppDispatch = typeof AppStore.dispatch;
