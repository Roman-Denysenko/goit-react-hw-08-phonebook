import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';
import s from './Login.module.css';

class Login extends Component {

    state = {
        email: '',
        password:''
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState(() => ({
            [name]:value
        }))
     }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onLoginUser(this.state);
        this.setState(() => ({
             email: '',
             password:''
        }))
    }

    render() {
        const { email, password } = this.state;
        return (
            <div>
                <h1>Login</h1>
            <form
                autoComplete='off'
                onSubmit={this.handleSubmit}
                className={s.form}
            > 
                <label className={s.label}> Email
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
    onLoginUser: logIn,
}

export default connect(null,mapDispatchToProps)(Login);