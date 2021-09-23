import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import chatsReducer from './chatsList';

export const store = createStore(chatsReducer, composeWithDevTools());
// import profileReducer from './profileList';

// const rootReducer = combineReducers({
//     chatsList: chatsReducer,
//     profile: profileReducer,
// });

// export const store = createStore(rootReducer, composeWithDevTools());  