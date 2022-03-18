import {fetchVideos, fetchVideoSuccess, fetchVideoError} from './videoActions';
import apiClient from '../../Services/ApiClient';

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