import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {getAuthenticated}  from '../redux/auth/auth-selectors';

/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на /login
 */
const PrivateRoute = ({
    component: Component,
    isAuthenticated,
    redirectTo,
    ...routeProps
    }) => (
      <Route
        {...routeProps}
        render={props => isAuthenticated
          ? <Component {...props} />
          : <Redirect to={redirectTo} />
        }/>
          );


const mapStateToProps = state => ({
  isAuthenticated: getAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);