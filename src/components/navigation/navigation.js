import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import routes from '../../routes';

const Navigation = () => {
    return (
        <div>
            <Link exact="true" to={routes.home} >Home</Link>
            <Link to={routes.contacts} >Contacts</Link>
        </div>
    )
}

Navigation.propType = {

};

export default Navigation;