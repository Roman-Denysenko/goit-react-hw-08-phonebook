import React from 'react';
import PropTypes from 'prop-types';

const UserMenu = ({mail,onLogout,avatar}) => {
    return (
         <div >
    <img src={avatar} alt="" width="32" />
    <span >Welcome, {mail}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
    )
}

UserMenu.propType = {

};

export default UserMenu;