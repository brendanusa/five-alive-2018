import React from 'react';

const Message = (props) => {

  return(
    <div className="Message">
      <span>{props.author}</span>
      <span>{props.text}</span>
      <span>{props.timestamp}</span>
    </div>
  )

}

export default Message;