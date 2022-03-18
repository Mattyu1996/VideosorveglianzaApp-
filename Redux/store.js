import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import videosReducer from './Reducers/videoReducer';
import cameraReducer from './Reducers/cameraReducer';
import authReducer from './Reducers/authReducer';

const appReducers = combineReducers({
    videosReducer,
    cameraReducer,
    authReducer,
});

const rootReducer = (state, action) => appReducers(state, action);

export const store = createStore(rootReducer, applyMiddleware(thunk));

