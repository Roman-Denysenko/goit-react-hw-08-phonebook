import {
    registerRequest, registerSuccess, registerError,
    loginRequest, loginSuccess, loginError,
    logoutRequest, logoutSuccess, logoutError,
    getCurrentUserRequest, getCurrentUserSuccess, getCurrentUserError
} from './auth-actions';
import axios from 'axios';

axios.defaults.baseURL= 'https://goit-phonebook-api.herokuapp.com'

export const register = user => async dispatch => {
    dispatch(registerRequest());

    try {
        const response = await axios.post('/users/signup', user)
        dispatch(registerSuccess(response.data))
    } catch (error) {
        dispatch(registerError(error.message));
    }
};

export const logIn = user => async dispatch => {
    dispatch(loginRequest());

    try {
        const response = await axios.post('/users/login', user)
        dispatch(loginSuccess(response.data))
    } catch (error) {
        
    }
 }

/*
 * POST @ /users/logout
 * headers:
 *    Authorization: Bearer token
 *
 * 1. После успешного логаута, удаляем токен из HTTP-заголовка
 */
export const logOut = () => dispatch => { }

