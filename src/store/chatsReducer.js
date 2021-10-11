import { 
    ADD_CHAT, 
    DELETE_CHAT,
    CREATE_CHAT
} from "./types/chatsTypes"

const initialState = { activeId: 0,
    chats: [
    {id: 0, name: 'Штурмовики'},
    {id: 1, name: 'Джедаи'},
    {id: 2, name: 'Принцесса Лея 18+'},
    {id: 3, name: 'Дроны'},
    {id: 4, name: 'Ситхи'}
]};
const chatsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_CHAT:
            return { ...state, activeId: payload };
        case DELETE_CHAT:
            return {...state, chats: state.chats.filter((chat) => chat.id !== payload)};
        case CREATE_CHAT:
            return {...state, chats: [...state.chats, {id: state.chats.length, name: payload}]};  
        default:
            return state;
    }
};

export default chatsReducer;