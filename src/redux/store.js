import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import newsSlice from "./news/slice";
import friendsSlice from "./friends/slice";
import authSlice from "./auth/slice";
import noticesSlice from "./notices/slice";
import citiesSlice from "./cities/slice";
import favoritesSlice from "./auth/sliceFavorites";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "news",
    "friends",
    "notices",
    "auth",
    "filters",
    "cities",
    "favorites",
  ],
};

const rootReducer = combineReducers({
  news: newsSlice,
  friends: friendsSlice,
  notices: noticesSlice,
  auth: authSlice,
  cities: citiesSlice,
  favorites: favoritesSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
