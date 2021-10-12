import './App.css';
// import { useLocalStotage } from './hooks/useLocalStorage';
import { Container } from './Components/Container/Container';
import { Switch, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import Contacts from './views/Contacts';
import { ContactForm } from './Components/ContactForm/ContactForm';
import AppBar from './Components/AppBar';
// import Filter from './Components/Filter/Filter';
// import { ContactList } from './Components/ContactList/ContactList';
// import ReactNotifications from 'react-notifications-component';
// import s from './../src/Components/Container/Container.module.css';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import { useEffect } from 'react';
import {
  fetchContacts,
  addContact,
} from './../src/redux/contacts/contacts-operations';
import { useDispatch } from 'react-redux';

// const App = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div className="App">
//       <ReactNotifications />
//       <Container>
//         <h1 className={s.container__label}>Phonebook</h1>
//         <ContactForm onSubmit={item => dispatch(addContact(item))} />

//         <h2 className={s.container__contacts}>Contacts</h2>

//         <Filter />
//         <ContactList />
//       </Container>
//     </div>
//   );
// };

const App = () => {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </Container>
  );
};

export default App;
