import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

import {
  onDeleteNotification,
  onSuccsessNotification,
} from '../../Components/Notifications/Notifications';

const items = createReducer([], {
  [actions.fetchContactSuccess]: (state, action) => {
    return action.payload;
  },

  [actions.addContactSuccess]: (state, action) => {
    onSuccsessNotification();
    return [...state, action.payload];
  },

  [actions.deleteContactSuccess]: (state, action) => {
    onDeleteNotification();
    return state.filter(item => {
      return item.id !== action.payload;
    });
  },
});

// const loading = createReducer(false, {
//   [actions.addContactRequest]: () => true,
//   [actions.addContactSuccess]: () => false,
//   [actions.addContactError]: () => false,
//   [actions.deleteContactRequest]: () => true,
//   [actions.deleteContactSuccess]: () => false,
//   [actions.deleteContactError]: () => false,
// });

const filter = createReducer([], {
  [actions.filter]: (_, action) => [action.payload.toLowerCase()],
});

export default combineReducers({
  items,
  filter,
  // loading,
});
