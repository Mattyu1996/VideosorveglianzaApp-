import {login, loginSuccess, loginError} from './authActions';
import ApiClient from '../../Services/ApiClient';

const apiClient = new ApiClient();

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