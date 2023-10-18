import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "./mainSlice";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistReducer } from 'redux-persist';

const reducers = combineReducers({
  main : mainReducer,

})

const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
reducer :  persistedReducer,
middleware: (getDefaultMiddleware) => {
  return getDefaultMiddleware({
    serializableCheck: false,
  });
},
  devTools: process.env.NODE_ENV !== 'production',

});
