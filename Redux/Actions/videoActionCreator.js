import apiClient from "../../Services/ApiClient";
import {
    fetchVideoError, fetchVideos,
    fetchVideoSuccess
} from "./videoActions";

const videoActionCreator = (date) => (dispatch) => {
  dispatch(fetchVideos());
  return new Promise(() => {
    apiClient
      .getRecordedVideos(date)
      .then((res) => {
        dispatch(fetchVideoSuccess(res));
      })
      .catch((err) => {
        dispatch(fetchVideoError(err));
      });
  });
};

export default videoActionCreator;
