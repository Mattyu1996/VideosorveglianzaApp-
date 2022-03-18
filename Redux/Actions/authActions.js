import ACTION_TYPES from '../Actions/actionTypes';

export const login = ()=>({
    type: ACTION_TYPES.AUTH_LOGIN,
});

export const loginSuccess = (data)=>({
    type: ACTION_TYPES.AUTH_LOGIN_SUCCESS,
    payload: data
});

export const loginError = (error)=>({
    type: ACTION_TYPES.AUTH_LOGIN_ERROR,
    payload: error
});