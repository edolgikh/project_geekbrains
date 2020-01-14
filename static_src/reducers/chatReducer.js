import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageActions';
import { ADD_CHAT } from "../actions/chatActions";
import { DELETE_CHAT } from "../actions/chatActions";
import { ACTIVE_CHAT } from "../actions/chatActions";

const initialStore = {
   chats: {
       1: {title: 'Чат 1', messageList: []},
       2: {title: 'Чат 2', messageList: []},
       3: {title: 'Чат 3', messageList: []},
   },
    activeChat: '',
};


export default function chatReducer(store = initialStore, action) {
   switch (action.type) {
       case SEND_MESSAGE: {
           return update(store, {
               chats: { $merge: { [action.chatId]: {
                   title: store.chats[action.chatId].title,
                   messageList: [...store.chats[action.chatId].messageList, action.messageId]
               } } },
           });
       }
       case ADD_CHAT: {
           const chatId = Object.keys(store.chats).length + 1;
           return update(store, {
               chats: { $merge: { [chatId]: { title: action.title, messageList: [] } } }
           });
       }

       case DELETE_CHAT: {
           return update(store, {
               //chats: store.chats.filter(item => item.chatId !== action.chatId) //НЕ ЗНАЮ как тут написать возвращение массива без элемента
       });
       }
       case ACTIVE_CHAT: {
           console.log("hi ACTIVE_CHAT from reducer");
           return update(store, {
               activeChat: { $set: action.chatId },
           });
       }

       default:
           return store;
   }
}
