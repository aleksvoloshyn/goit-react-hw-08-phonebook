import { ContactForm } from './../Components/ContactForm/ContactForm';
import Filter from './../Components/Filter/Filter';
import { ContactList } from './../Components/ContactList/ContactList';
import ReactNotifications from 'react-notifications-component';
import s from './../Components/Container/Container.module.css';
import { useEffect } from 'react';
import {
  fetchContacts,
  addContact,
} from './../redux/contacts/contacts-operations';
import { useDispatch } from 'react-redux';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="App">
      <ReactNotifications />
      <>
        <h1 className={s.container__label}>Phonebook</h1>
        <ContactForm onSubmit={item => dispatch(addContact(item))} />

        <h2 className={s.container__contacts}>Contacts</h2>

        <Filter />
        <ContactList />
      </>
    </div>
  );
};

export default Contacts;
