import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import chatsReducer from './chatsList';
import profileReducer from './profileList';

const rootReducer = combineReducers({
    chatsList: chatsReducer,
    profile: profileReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());  