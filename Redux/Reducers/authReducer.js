import LocalStorage from "../../Services/LocalStorage";
import ACTION_TYPES from "../Actions/actionTypes";

const localStorage = new LocalStorage();
const INITIAL_STATE = {
  token: "",
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.AUTH_LOGIN:
      return state;
    case ACTION_TYPES.AUTH_LOGIN_SUCCESS:
      localStorage.saveToken(action.payload.token);
      return { ...state, token: action.payload.token };
    case ACTION_TYPES.AUTH_LOGIN_ERROR:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
