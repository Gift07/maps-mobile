import { configureStore } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authSlice from './features/auth/reducer'
import bikeSlice from "./features/bikes/reducer"
import locationSlice from "./features/locations/reducer"
import cartSlice from "./features/cart/reducer"

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['bookmarks']
};

const rootReducer = combineReducers({
  auth: authSlice,
  location: locationSlice,
  bikes: bikeSlice,
  cart: cartSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export const persistor = persistStore(store);