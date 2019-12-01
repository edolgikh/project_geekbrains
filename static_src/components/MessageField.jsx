import React from 'react';
import Message from './Message';

export default class MessageField extends React.Component {
    state = {
        messages: [["user","Привет!"],["user","Как дела?"]]
    };

    handleClick = () => {
        this.setState({ messages: [ ...this.state.messages, ['user','Нормально'] ] });
    };

    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length-1][0] !== 'bot') {  // Остаток от деления на 2
            setTimeout(() =>
                    this.setState(
                        { messages: [ ...this.state.messages, ['bot','Не приставай ко мне, я робот!'] ] }),
                1000);
        }
    }
    ;

    render() {
        const messageElements = this.state.messages.map((text, index) => (

            <Message key={ index } text={ text } />));

        return <div>
            { messageElements }
            <button onClick={ this.handleClick }>Отправить сообщение</button>
        </div>
    }
}
