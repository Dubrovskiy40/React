
export const deleteChat = (id) => ({
    type: "DELETE_CHAT_ITEM",
    payload: id,
});

export const addChat = (name) => ({
    type: "ADD_CHAT_ITEM",
    payload: name,
});