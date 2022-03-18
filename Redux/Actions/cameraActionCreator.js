import apiClient from '../../Services/ApiClient';
import { fetchCamera, fetchCameraError, fetchCameraSuccess } from './cameraActions';

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