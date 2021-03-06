import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import s from './Contacts.module.css';
import { fetchContacts } from '../../redux/contacts/operations';
import selectors from '../../redux/contacts/selectors';

import ContactForm from '../../components/contactForm';
import ContactList from '../../components/contactList';
import Filter from '../../components/filter';

const Contacts = ({ items, loading }) => {
  fetchContacts();
    
    return (
      <div className={s.container}>
        <CSSTransition in={true} appear={true}classNames={s} timeout={500} unmountOnExit>
          <h1>Phonebook</h1>
        </CSSTransition>

        <ContactForm />
        {loading&&<p>Loading...</p>} 

       <CSSTransition in={items.length>0} timeout={250} classNames={s} unmountOnExit>
          <div>
            <h2>Contacts</h2>
            <Filter />
        <ContactList
            />
            </div>
          </CSSTransition>
      </div>
    );
  }

Contacts.propTypes = {
  items: PropTypes.array,
};


const mapStateToProps = state => ({
  items: selectors.getContactsItems(state),
  loading:selectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts:dispatch(fetchContacts()),
});

export default connect(mapStateToProps,mapDispatchToProps)(Contacts);

