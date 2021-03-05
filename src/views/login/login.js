import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';

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
            <form
                autoComplete='off'
                onSubmit={this.handleSubmit}
            > 
                <label> Email
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
    onLoginUser: logIn,
}

export default connect(null,mapDispatchToProps)(Login);