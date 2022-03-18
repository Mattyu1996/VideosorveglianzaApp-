import apiClient from "../../Services/ApiClient";
import {
    fetchVideoError, fetchVideos,
    fetchVideoSuccess
} from "./videoActions";

const videoActionCreator = () => (dispatch) => {
  dispatch(fetchVideos());
  return new Promise(() => {
    apiClient
      .getRecordedVideos()
      .then((res) => {
        dispatch(fetchVideoSuccess(res));
      })
      .catch((err) => {
        dispatch(fetchVideoError(err));
      });
  });
};

export default videoActionCreator;
