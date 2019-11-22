import React from 'react';
import ReactDOM from 'react-dom';

let messages = ['Привет', 'Как дела?'];

const MessageComponent = (props) => <div>{props.text}</div>;
const SendMessage = () =>{
    messages.push("Нормально!");
    ReactDOM.render(
        <MessageField messages={ messages } />,
        document.getElementById('root'),
    );
}

const MessageField = (props) => {
    const ElMessage =  props.messages.map(message => <MessageComponent text={ message } />);
    return(
        <div>
            <h1>React chat</h1>
            {ElMessage}
            <button onClick={SendMessage}>Send message</button>
        </div>
    );

};

ReactDOM.render(
    <MessageField messages={ messages } />,
    document.getElementById('root'),
);