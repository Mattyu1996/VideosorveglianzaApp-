import ACTION_TYPES from '../Actions/actionTypes';

const INITIAL_STATE = {
    cameras: []
}

const cameraReducer = (state= INITIAL_STATE, action)=>{
    switch (action.type) {
        case ACTION_TYPES.GET_CAMERA_PENDING:
          return state;
        case ACTION_TYPES.GET_CAMERA_SUCCESS:
            return {cameras: action.payload}
            
        case ACTION_TYPES.GET_CAMERA_ERROR:
          console.log(action.payload);  
          return {
            ...state,
            error: action.payload,
          };
    
        default:
          return state;
      }
}

export default cameraReducer;