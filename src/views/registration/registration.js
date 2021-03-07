import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';

class Registration extends Component {

    state = {
        name: '',
        email: '',
        password: '',
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState(() => ({
            [name]:value
        }))
     }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onRegistrationUser(this.state);
        this.setState(() => ({
             name: '',
             email: '',
             password:''
        }))
    }

    render() {
        const { name, email, password } = this.state;
        return (
            <form
                autoComplete='off'
                onSubmit={this.handleSubmit}
            > 
                <label> Name
                    <input
                    type='name'
                    name='name'
                    value={name}
                    onChange={this.handleChange}/>
                </label>
               <label> Mail
                    <input
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}/>
                </label>
                <label> Password
                    <input
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}/>
                </label>
                <button type='submit'>Submit</button>
        </form>
        )
    }
}

const mapDispatchToProps = {
    onRegistrationUser: register,
}

export default connect(null,mapDispatchToProps)(Registration) ;