import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./Reducers/authReducer";
import cameraReducer from "./Reducers/cameraReducer";
import videosReducer from "./Reducers/videoReducer";

const appReducers = combineReducers({
  videosReducer,
  cameraReducer,
  authReducer,
});

const rootReducer = (state, action) => appReducers(state, action);

export const store = createStore(rootReducer, applyMiddleware(thunk));
