import './App.css';

import { Container } from './Components/Container/Container';
import { Switch, Route } from 'react-router-dom';
// import HomeView from './views/HomeView';
// import RegisterView from './views/RegisterView';
// import LoginView from './views/LoginView';
// import Contacts from './views/Contacts';
import { authOperations } from './redux/auth/';

import AppBar from './Components/AppBar';

import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';

import {
  fetchContacts,
  addContact,
} from './../src/redux/contacts/contacts-operations';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const Contacts = lazy(() => import('./views/Contacts'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Switch>
        <Suspense fallback={<p>Загружаем...</p>}>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>
          <PublicRoute exact path="/register" restricted>
            <RegisterView />
          </PublicRoute>
          <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
            <LoginView />
          </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/login">
            <Contacts />
          </PrivateRoute>
        </Suspense>
      </Switch>
    </Container>
  );
};

export default App;
