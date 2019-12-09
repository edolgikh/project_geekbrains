import React from 'react';
import { List, ListItem } from 'material-ui/List';
//import PropTypes from "prop-types";
import Message from "./Message";

export default class ChatList extends React.Component {
    state = {
        chats: ["Чат 1", "Чат 2", "Чат 3"]
    };

    render() {

        const chatElements = this.state.chats.map((chats, index) => (
            <ListItem className = "listItem" key={ index } primaryText={ chats }/>));
        return <List>
            {chatElements}
        </List>
    }
}
