import { 
    OPEN_CHAT, 
    DELETE_CHAT 
} from "../store/types/chatsTypes";

export const deleteChat = (id) => ({
    type: DELETE_CHAT,
    payload: id,
});

export const addChat = (id) => ({
    type: OPEN_CHAT,
    payload: id,
});