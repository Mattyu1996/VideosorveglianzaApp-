import {fetchCamera, fetchCameraSuccess, fetchCameraError} from './cameraActions';
import ApiClient from '../../Services/ApiClient';

const apiClient = new ApiClient();

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