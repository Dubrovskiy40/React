// import reducer, { initialState } from '../../store/profileReducer'
// import {ADD_PROFILE} from '../../actions/profileActions'

// describe('news reducer', () => {
//     it('ADD_PROFILE', () => {
//         const action = {
//             type: ADD_PROFILE
//         }
//         expect(reducer(initialState, action)).toEqual({
//             ...initialState,
//             ...action.payload,
//         })
//     })
// })
import chatsReducer from '../../store/chatsReducer';
import { addChat, deleteChat } from '../../actions/chatsActions';

const state = {
    chats: [
        {id: 0, name: 'Штурмовики'},
        {id: 1, name: 'Джедаи'},
        {id: 2, name: 'Принцесса Лея 18+'},
        {id: 3, name: 'Дроны'},
        {id: 4, name: 'Ситхи'}
    ]
};
it ('chat add chats should be correct', () => {
    let action = addChat('Test chat');
    let newState = chatsReducer(state, action);

    expect(newState.chats.length).toBe(6);
});

it ('length of chats should be incremented', () => {
    let action = addChat('Test chat');
    let newState = chatsReducer(state, action);

    expect(newState.chats[5].name).toBe('Test chat');
});

it ('after deleting length of messages should be decrement', () => {
    let action = deleteChat(1);
    let newState = chatsReducer(state, action);

    expect(newState.chats.length).toBe(4);
});