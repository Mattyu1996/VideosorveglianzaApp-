import {fetchVideos, fetchVideoSuccess, fetchVideoError} from './videoActions';
import ApiClient from '../../Services/ApiClient';

const apiClient = new ApiClient();

const videoActionCreator = () => (dispatch)=>{
    dispatch(fetchVideos());
    return new Promise(()=>{
        apiClient.getRecordedVideos().then( res =>{
            dispatch(fetchVideoSuccess(res));
        }).catch(err =>{
            dispatch(fetchVideoError(err));
        })
    });
}


export default videoActionCreator;