import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Navigation from '../navigation';
import AuthNav from '../authNav';
import UserMenu from '../userMenu';
import authSelectors from '../../redux/auth/auth-selectors';

const Header = ({ Authorization }) => {
    
    return (
        <header>
            <nav>
                <Navigation/>
            </nav>
               {Authorization ? <UserMenu/> : <AuthNav/> } 
        </header>
    )
}

Header.propType = {
};

const mapStateToProps = state => ({
    Authorization: authSelectors.getAuthToken(state),
})

export default connect(mapStateToProps)(Header);