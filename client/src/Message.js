import React, { Component } from 'react';
import './Message.css';
import Linkify from 'react-linkify';

class Message extends Component {

  constructor(props) {
    super(props);
    this.state = {
      containsLink: false,
      messageTextSegments: []
    };
  }

  render() {

    return (
      <div className="Message">
        <span className="MessageAuthor">{this.props.author}: </span>
        <span className="MessageText" target="_blank">
          <Linkify >{this.props.text}</Linkify>
        </span>
        <span className="MessageTimestamp">{this.props.timestamp.replace('T', ' ').split('.')[0]}</span>
      </div>
    )

  }

}


export default Message;