import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import s from './Registration.module.css';

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
            <div>
                <h1>Registration</h1>
                <form
                    className={s.form}
                autoComplete='off'
                onSubmit={this.handleSubmit}
            > 
                <label className={s.label}> Name
                    <input
                    className={s.input}
                    type='name'
                    name='name'
                    value={name}
                    onChange={this.handleChange}/>
                </label >
               <label className={s.label}> Mail
                    <input
                    className={s.input}
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}/>
                </label>
                <label className={s.label}> Password
                    <input
                    className={s.input}
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}/>
                </label>
                <button type='submit' className={s.button}>Submit</button>
                </form>
                </div>
        )
    }
}

const mapDispatchToProps = {
    onRegistrationUser: register,
}

export default connect(null,mapDispatchToProps)(Registration) ;