import apiClient from "../../Services/ApiClient";
import { login, loginError, loginSuccess } from "./authActions";

const authActionCreator = (username, password) => (dispatch) => {
  dispatch(login());
  return new Promise(() => {
    apiClient
      .login(username, password)
      .then((res) => {
        dispatch(loginSuccess(res));
      })
      .catch((err) => {
        dispatch(loginError(err));
      });
  });
};

export default authActionCreator;
