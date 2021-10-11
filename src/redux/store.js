// import { combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import contactsReducer from './contacts/contacts-reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import contactsReducer from './contacts/contacts-reducer';

const middleware = [...getDefaultMiddleware(), logger];

// const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//   },
//   middleware: middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// console.log(store);s
export default store;
