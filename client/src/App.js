import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserContextProvider } from 'context/UserContext';

import Header from 'components/Header';
import CreateForm from 'pages/CreateForm';
import SignIn from 'pages/SignIn';
import EditForm from 'pages/EditForm';
import Home from 'pages/Home';

import { firebaseApp } from 'services/firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(firebaseApp);

export default function App() {
  const [globalAuth, setGlobalAuth] = useState(null);

  onAuthStateChanged(auth, (userFirebase) => {
    userFirebase ? setGlobalAuth(userFirebase) : setGlobalAuth(null);
  })

  return (
    <Router>
      <Header />
      <UserContextProvider>
        <Switch>
          <Route exact path='/' component={globalAuth ? Home : SignIn} />
          <Route path='/create' component={CreateForm} />
          <Route path='/edit/:id' component={EditForm} />
        </Switch>
      </UserContextProvider>
    </Router>
  );
}
