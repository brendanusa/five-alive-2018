import React from 'react';
import './Message.css';

const Message = (props) => {

  return(
    <div className="Message">
      <span className="MessageAuthor">{props.author}: </span>
      <span className="MessageText">{props.text} </span>
      <span className="MessageTimestamp">{props.timestamp}</span>
    </div>
  )

}

export default Message;