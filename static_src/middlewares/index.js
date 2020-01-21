import messageMiddleware from './messageMiddleware';
import chatMiddleware from './chatMiddleware';
import { apiMiddleware } from 'redux-api-middleware';

export default [
    apiMiddleware,
    messageMiddleware,
    chatMiddleware,
];