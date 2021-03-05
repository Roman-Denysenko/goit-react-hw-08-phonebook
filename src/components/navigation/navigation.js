import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Link exact="true" to='/' >Home</Link>
            <Link to='/contacts' >Contacts</Link>
        </div>
    )
}

Navigation.propType = {

};

export default Navigation;