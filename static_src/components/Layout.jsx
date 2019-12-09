import React from 'react';
import Header from './Header';
import MessageField from './MessageField';
import ChatList from './ChatList';

export default class Layout extends React.Component {

    render() {
        return (
            <section>
                <Header className="header"/>
                <div className="layout">
                    <div className="layout_chatlist">
                        <ChatList />
                    </div>
                    <div className="layout_messagefield">
                        <MessageField />
                    </div>
                </div>
            </section>
        )
    }
}