
export const deleteChat = (id) => ({
    type: "DELETE_CHAT_ITEM",
    payload: id,
});

export const addChat = (id) => ({
    type: "ADD_CHAT_ITEM",
    payload: id,
});