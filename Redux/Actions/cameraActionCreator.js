import {fetchCamera, fetchCameraSuccess, fetchCameraError} from './cameraActions';
import apiClient from '../../Services/ApiClient';

const cameraActionCreator = () => (dispatch)=>{
    dispatch(fetchCamera());
    return new Promise(()=>{
        apiClient.getCameras().then( res =>{
            dispatch(fetchCameraSuccess(res));
        }).catch(err =>{
            dispatch(fetchCameraError(err));
        })
    });
}


export default cameraActionCreator;