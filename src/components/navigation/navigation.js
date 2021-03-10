import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <div>
      <Link exact="true" to={routes.home} className={s.link}>
        Home
      </Link>
      <Link to={routes.contacts} className={s.link}>
        Contacts
      </Link>
    </div>
  );
};

Navigation.propType = {};

export default Navigation;
