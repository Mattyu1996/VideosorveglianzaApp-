import {login, loginSuccess, loginError} from './authActions';
import apiClient from '../../Services/ApiClient';

const authActionCreator = (username, password) => (dispatch)=>{
    dispatch(login());
    return new Promise(()=>{
        apiClient.login(username, password).then( res =>{
            dispatch(loginSuccess(res));
        }).catch(err =>{
            dispatch(loginError(err));
        })
    });
}

export default authActionCreator;