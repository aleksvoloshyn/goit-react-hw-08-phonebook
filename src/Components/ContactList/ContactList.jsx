// import { useEffect } from 'react';
// import * as contactsApi from "./../../contacts-api"
import * as contactsSelectors from '../../redux/contacts/contactsSelectors';

import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import s from './ContactList.module.css';
import { deleteContact } from './../../redux/contacts/contacts-operations';
import { useDispatch } from 'react-redux';

function ContactList() {
  const contacts = useSelector(contactsSelectors.filteredContacts);
  const dispatch = useDispatch();

  return (
    <div>
      {contacts.length > 0 && (
        <ul>
          {contacts.map(cont => {
            return (
              <li className={s.contactList__item} key={cont.id}>
                <span className={s.contactList__name}>{cont.name}</span>
                <span className={s.contactList__number}>{cont.number}</span>
                <Button
                  variant="danger"
                  onClick={() => dispatch(deleteContact(cont.id))}
                >
                  Delete
                </Button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
};

export { ContactList };
