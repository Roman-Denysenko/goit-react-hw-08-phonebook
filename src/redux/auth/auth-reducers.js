import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
    registerRequest, registerSuccess, registerError,
    loginRequest, loginSuccess, loginError,
    logoutRequest, logoutSuccess, logoutError,
    getCurrentUserRequest, getCurrentUserSuccess, getCurrentUserError
} from './auth-actions';

const initialStateUser = { login: null, mail: null }

const user = createReducer(initialStateUser, {
    [registerSuccess]: (_, { payload }) => payload.user,
    [loginSuccess]:(_, { payload }) => payload.user,
})

const token = createReducer(null, {
    [registerSuccess]: (_, { payload }) => payload.token,
    [loginSuccess]:(_,{payload})=>payload.token,
})

const error = createReducer(null, {
    [registerError]: (_, { payload }) => payload,
    [loginError]:(_, { payload }) => payload,
})

export default combineReducers({
        user,
        token,
        error
})