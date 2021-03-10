import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import s from './UserMenu.module.css';

import { getAuthEmail } from '../../redux/auth/auth-selectors';
import defaultImg from './defImg.png';
import { logOut } from '../../redux/auth/auth-operations';

const UserMenu = ({ email, onLogout, avatar }) => {
  return (
    <div className={s.container}>
      <img src={avatar} alt="" width="32" className={s.element} />
      <span className={s.element}>Welcome: {email}</span>
      <button type="button" onClick={onLogout} className={s.element}>
        Logout
      </button>
    </div>
  );
};

UserMenu.propType = {
  mail: PropTypes.string,
  onLogout: PropTypes.func,
  avatar: PropTypes.string,
};

const mapStateToProps = state => ({
  email: getAuthEmail(state),
  avatar: defaultImg,
});

const mapDispatchToProps = {
  onLogout: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
