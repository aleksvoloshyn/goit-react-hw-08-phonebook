import './App.css';
// import { useLocalStotage } from './hooks/useLocalStorage';
import { Container } from './Components/Container/Container';
import { ContactForm } from './Components/ContactForm/ContactForm';
import Filter from './Components/Filter/Filter';
import { ContactList } from './Components/ContactList/ContactList';
import ReactNotifications from 'react-notifications-component';
import s from './../src/Components/Container/Container.module.css';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import { useEffect } from 'react';
import {
  fetchContacts,
  addContact,
} from './../src/redux/contacts/contacts-operations';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="App">
      <ReactNotifications />
      <Container>
        <h1 className={s.container__label}>Phonebook</h1>
        <ContactForm onSubmit={item => dispatch(addContact(item))} />

        <h2 className={s.container__contacts}>Contacts</h2>

        <Filter />
        <ContactList />
      </Container>
    </div>
  );
};

// const mapDispatchToProps = dispatch => ({
//   addItem: item => dispatch(contactsActions.addContact(item)),
//   onDeleteContact: item => dispatch(contactsActions.deleteContact(item)),
// });

// export default connect(null, mapDispatchToProps)(App);
export default App;
