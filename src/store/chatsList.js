const defaultState = { chatsList: [
    {id: 1, name: 'Штурмовики', href: '/chats/{id}'},
    {id: 2, name: 'Джедаи', href: '/chats/{id}'},
    {id: 3, name: 'Принцесса Лея 18+', href: '/chats/{id}'},
    {id: 4, name: 'Дроны', href: '/chats/{id}'},
    {id: 5, name: 'Ситхи', href: '/chats/{id}'}
]};
const chatsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_CHAT_ITEM":
            return { ...state, chatsList: [...state.chatsList, {id: state.chatsList.length, name: action.payload}] };
        case "DELETE_CHAT_ITEM":
            return {...state, chatsList: state.chatsList.filter((el) => el.id !== action.payload), };   
        default:
            return state;
    }
};

export default chatsReducer;