import { SEND_MESSAGE, sendMessage } from "../actions/messageActions";
import {ACTIVE_CHAT, activeChat} from "../actions/chatActions";

export default store => next => (action) => {
    console.log(action);
    switch (action.type) {
        case SEND_MESSAGE:
            if (action.sender === 'me') {
                setTimeout(() => store.dispatch(
                    sendMessage(Object.keys(store.getState().messageReducer.messages).length + 1,
                    'Не приставай ко мне, я робот!', 'bot', action.chatId)), 1000)
            }
        case ACTIVE_CHAT:
            if (action.sender === 'bot') {
                console.log("hi ACTIVE_CHAT from MW");
                store.dispatch(activeChat(action.chatId));
                setTimeout(() => store.dispatch(
                    activeChat("")), 1000);
            }
    }
    return next(action)
}
