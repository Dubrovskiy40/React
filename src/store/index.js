import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import chats from './chatsReducer';
import profile from './profileReducer';
import modalMessage from './modalMessageReducer';
import messages from './messagesReducer';

const rootReducer = combineReducers({
    profile,
    chats,
    modalMessage,
    messages
});

export const store = createStore(rootReducer, composeWithDevTools());  