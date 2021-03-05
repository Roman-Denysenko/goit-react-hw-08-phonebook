import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavLink = () => {
    return (
        <div>
            <Link to='/login' >Login</Link>/
            <Link to='/registration' >Registration</Link>
        </div>
    )
}

NavLink.propType = {

};

export default NavLink;