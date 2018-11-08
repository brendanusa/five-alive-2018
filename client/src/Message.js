import React from 'react';
import './Message.css';

const Message = (props) => {

  return(
    <div className="Message">
      <span className="MessageAuthor">{props.author}: </span>
      <span className="MessageText">{props.text} </span>
      <span className="MessageTimestamp">{props.timestamp.replace('T', ' ').split('.')[0]}</span>
    </div>
  )

}

export default Message;