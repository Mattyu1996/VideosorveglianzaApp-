import ACTION_TYPES from "../Actions/actionTypes";

export const fetchVideos = () => ({
  type: ACTION_TYPES.GET_VIDEO_PENDING,
});

export const fetchVideoSuccess = (data) => ({
  type: ACTION_TYPES.GET_VIDEO_SUCCESS,
  payload: data,
});

export const fetchVideoError = (error) => ({
  type: ACTION_TYPES.GET_VIDEO_ERROR,
  payload: error,
});
