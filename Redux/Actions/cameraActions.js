import ACTION_TYPES from '../Actions/actionTypes';


export const fetchCamera = ()=>({
    type: ACTION_TYPES.GET_CAMERA_PENDING,
});

export const fetchCameraSuccess = (data)=>({
    type: ACTION_TYPES.GET_CAMERA_SUCCESS,
    payload: data
});

export const fetchCameraError = (error)=>({
    type: ACTION_TYPES.GET_CAMERA_ERROR,
    payload: error
});
