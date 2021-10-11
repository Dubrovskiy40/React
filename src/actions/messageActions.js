import { 
    ADD_MESSAGE, 
    DELETE_MESSAGE, 
    DELETE_MESSAGELIST 
} from '../store/types/messageTypes';

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: { chatId, message }
});

export const deleteMessage = (chatId, id) => ({
    type: DELETE_MESSAGE,
    payload: { chatId, id}
});

export const deleteMessageList = (id) => ({
    type: DELETE_MESSAGELIST,
    payload: id 
});
