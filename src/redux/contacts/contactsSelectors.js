import { createSelector } from 'reselect';

export const allContacts = state => state.contacts.items;
export const filterValue = state => state.contacts.filter;

export const filteredContacts = createSelector(
  [allContacts, filterValue],
  (items, filter) => {
    return items.filter(contact => contact.name.toLowerCase().includes(filter));
  },
);
