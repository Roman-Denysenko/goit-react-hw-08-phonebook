import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import  {getAuthenticated}  from '../redux/auth/auth-selectors';

/**
 * - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на /contacts
 * - В противном случае рендерит компонент
 */
const PublicRoute = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props => isAuthenticated && routeProps.restricted
      ? (<Redirect to={redirectTo} />)
      : (<Component {...props} />)
    }/>
);

const mapStateToProps = state => ({
  isAuthenticated: getAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);