// import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import actions from './contacts-actions';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';

export const fetchContacts = () => dispatch => {
  dispatch(actions.fetchContactRequest);

  axios
    .get(`/contacts`)
    .then(({ data }) => dispatch(actions.fetchContactSuccess(data)))
    .catch(error => dispatch(actions.fetchContactError(error)));
};

export const addContact = text => dispatch => {
  const newContact = {
    id: uuidv4(),
    name: text.name,
    number: text.number,
  };

  dispatch(actions.addContactRequest);

  axios
    .post(`/contacts`, newContact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(error => dispatch(actions.deleteContactError(error)));
};

export const deleteContact = id => dispatch => {
  dispatch(actions.deleteContactRequest);

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deleteContactSuccess(id)))
    .catch(error => dispatch(actions.deleteContactError(error)));
};

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchContacts',
//   async () => {
//     const contacts = await contactsApi.fetchContacts();
//     return contacts;
//   },
// );

// export const addNewContact = createAsyncThunk(
//   'contacts/addContact',
//   async contact => {
//     const contacts = await contactsApi.addContacts(contact);
//     return contacts;
//   },
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContacts',
//   async id => {
//     try {
//       await contactsApi.deleteContacts(id);
//       return id;
//     } catch (error) {
//       return error;
//     }
//   },
// );

// export default {
//   addContact,
// };
