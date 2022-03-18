import ACTION_TYPES from "../Actions/actionTypes";

const INITIAL_STATE = {
  videos: [],
};

const videosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_VIDEO_PENDING:
      return state;
    case ACTION_TYPES.GET_VIDEO_SUCCESS:
      return { videos: action.payload };

    case ACTION_TYPES.GET_VIDEO_ERROR:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default videosReducer;
