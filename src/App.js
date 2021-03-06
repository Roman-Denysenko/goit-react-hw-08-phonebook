import React,{Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Contacts from './views/contacts';
import Registration from './views/registration';
import Login from './views/login';
import Home from './views/home';
import Header from './components/header';
import { getCurrentUser } from './redux/auth/auth-operations';
import { fetchContacts } from './redux/contacts/operations';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
    this.props.onGetContacts();
  }
  
   render() {
      return (
      <>
        <Header/>
        <Switch>
           <Route exact  path="/" component={Home} />
           <Route path="/contacts"  component={Contacts} />
           <Route path="/login"  component={Login} />
           <Route path="/registration"  component={Registration} />
        </Switch>
      </>
    );
    }
}
  
const mapDispatchToProps =  {
  onGetCurrentUser: getCurrentUser,
  onGetContacts:fetchContacts,
};

export default connect(null, mapDispatchToProps)(App);

