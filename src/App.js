import './App.css';

import { Container } from './Components/Container/Container';
import { Switch, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import Contacts from './views/Contacts';
import {authOperations} from "./redux/auth/"

import AppBar from './Components/AppBar';

import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchContacts,
  addContact,
} from './../src/redux/contacts/contacts-operations';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
}, [dispatch]);

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
