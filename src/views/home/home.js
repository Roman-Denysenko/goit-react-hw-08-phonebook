import React from 'react';
import PropTypes from 'prop-types';
import s from './Home.module.css';

const Home = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Welcome to Phone-book Page</h1>
    </div>
  );
};

Home.propType = {};

export default Home;
