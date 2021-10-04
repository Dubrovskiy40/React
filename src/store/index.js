import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import chats from './chatsReducer';
import profile from './profileReducer';
import modalMessage from './modalMessageReducer';
import messages from './messagesReducer';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import apiPeopleReducer from './apiPeopleReducer';

const persistConfig = {
    key: 'socialNetwork',
    storage: storage,
    blacklist: ['modalMessage'],
}

const rootReducer = combineReducers({
    profile,
    chats,
    modalMessage,
    messages,
    apiPeopleReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));

export const persistor = persistStore(store);