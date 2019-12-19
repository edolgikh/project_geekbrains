import React from 'react';
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import MessageField from './MessageField';
import ChatList from './ChatList';
import Header from './Header';
import '../styles/layout.css';
import {sendMessage} from "../actions/messageActions";


class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
        messages: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired,
    };

    static defaultProps = {
        chatId: 1,
    };

    componentDidUpdate(prevProps, prevState) {
        const { messages, chatId } = this.props;
        if (Object.keys(prevProps.messages).length < Object.keys(messages).length &&
            Object.values(messages)[Object.values(messages).length - 1].sender === 'me') {
            setTimeout(() =>
                this.props.sendMessage(Object.keys(this.props.messages).length + 1, 'Не приставай ко мне, я робот!', 'bot', chatId), 5000);
        }
    }

    render() {
        return (
            <div className="layout">
                <Header chatId={ this.props.chatId } />
                <div className="layout-canvas">
                    <div className="layout-left-side">
                        <ChatList />
                    </div>
                    <div className="layout-right-side">
                        <MessageField
                            chatId={ this.props.chatId }
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({messageReducer}) => ({
    messages: messageReducer.messages,
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);