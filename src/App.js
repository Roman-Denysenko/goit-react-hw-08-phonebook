import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import s from './App.module.css';

import routes from './routes';
import Header from './components/header';
import { getCurrentUser } from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const Home = lazy(() => import('./views/home'));
const Contacts = lazy(() => import('./views/contacts'));
const Registration = lazy(() => import('./views/registration'));
const Login = lazy(() => import('./views/login'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <div className={s.container}>
        <Header />
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route exact path={routes.home} component={Home} />
            <PrivateRoute
              path={routes.contacts}
              redirectTo={routes.login}
              component={Contacts}
            />
            <PublicRoute
              path={routes.login}
              restricted
              redirectTo={routes.contacts}
              component={Login}
            />
            <PublicRoute
              path={routes.registration}
              restricted
              redirectTo={routes.contacts}
              component={Registration}
            />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
