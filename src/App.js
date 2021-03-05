import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Contacts from './views/contacts';
import Registration from './views/registration';
import Login from './views/login';
import Home from './views/home';
import Header from './components/header';

const App = () => {
    
    return (
      <>
        <Header/>
        <Switch>
           <Route exact  path="/" component={Home} />
           <Route path="/contacts"  component={Contacts} />
           <Route path="/login"  component={Login} />
           <Route path="/registration"  component={Registration} />
        </Switch>
      </>
    );
  }

export default App;

