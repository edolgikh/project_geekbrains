export const ADD_CHAT = '@@chat/ADD_CHAT';
export const DELETE_CHAT = '@@chat/DELETE_CHAT';
export const ACTIVE_CHAT = '@@chat/ACTIVE_CHAT';

export const addChat = (title) => ({
   type: ADD_CHAT,
   title,
});

export const deleteChat = (chatId) => ({
   type: DELETE_CHAT,
   chatId,
});

export const activeChat = (chatId) => ({
   type: ACTIVE_CHAT,
   chatId,
});
