import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import videosReducer from './Reducers/videoReducer';
import cameraReducer from './Reducers/cameraReducer';

const appReducers = combineReducers({
    videosReducer,
    cameraReducer
});

const rootReducer = (state, action) => appReducers(state, action);

export const store = createStore(rootReducer, applyMiddleware(thunk));

