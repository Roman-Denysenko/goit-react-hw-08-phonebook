import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import routes from '../../routes';

const NavLink = () => {
    return (
        <div>
            <Link to={routes.login} >Login</Link>/
            <Link to={routes.registration} >Registration</Link>
        </div>
    )
}

NavLink.propType = {

};

export default NavLink;