import { createAction } from '@reduxjs/toolkit';

const fetchContactRequest = createAction('contacts/fetchContactRequest');
const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
const fetchContactError = createAction('contacts/fetchContactError');

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactError = createAction('contacts/addContactError');

const deleteContactRequest = createAction('contacts/deleteContactRequest');
const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
const deleteContactError = createAction('contacts/deleteContactError');

const deleteContact = createAction('contacts/delete');

const filter = createAction('contacts/filter');

const actions = {
  fetchContactRequest, // pending
  fetchContactSuccess, // fulfilled
  fetchContactError, // rejected
  addContactRequest,
  addContactSuccess,
  addContactError,

  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,

  filter,
  deleteContact,
};

export default actions;
