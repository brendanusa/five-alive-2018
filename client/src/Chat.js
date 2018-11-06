import React, { Component } from 'react';
import './Chat.css';
import Message from './Message';
// import { subscribeToMessages } from './api';

class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      post: '',
      user: {},
      messages: [],
      temp: 'null'
    }
    // subscribeToMessages((err, messages) => this.setState({
    //   temp: messages
    // }))
  }

  componentDidMount() {

    const validCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A',
    'B','C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z','!','?','-','+','1','2','3','4','5','6','7','8','9','0'];

    const checkChars = message => {
      // let isMessageValid = true;
      for (let i = 0; i < message.length; i++) {
        if (!validCharacters.includes(message[i])) {
          return false;
        }
      }
      return true;
    }

    // fetch('/api/messages')
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({messages: data})
    //   })
  }


  handlePasswordSubmit = e => {
    e.preventDefault();
      console.log(this.state.post)
      fetch('/api/password?password=' + this.state.post)
        .then(res => res.json())
        .then(data => {
          console.log(data[0])
          if (data[0]) {
            console.log(data[0]);
            this.setState({user: data[0]});
            this.setState({authenticated: true});
          } else {
            window.alert('Invalid password!')
          }
        })
  }


  handleMessageSubmit = e => {
    e.preventDefault();
    console.log(this.state.post)
    if (this.state.post.length === 0 || this.state.post.length > 200) {
      return window.alert('Max 200 characters!');
    }
    if (this.checkChars(!this.state.post)) {
      return window.alert('Letters, numbers, !, ?, +, and - only! No fancy stuff.');
    }
    fetch('/api/message?message=' + this.state.post)
      .then(res => res.json())
      .then(data => {
        console.log(data[0])
        if (data[0]) {
          console.log(data[0]);
          this.setState({user: data[0]});
          this.setState({authenticated: true});
          this.setState({passwordFeedback: `Welcome ${this.state.user.name.split(' ')[0]}!`});
        } else {
          window.alert('Message failed!')
        }
      })
  }

  ChatFooter = () => {

    if (!this.state.isAuthenticated) {
      return (
        <form onSubmit={this.handlePasswordSubmit}>
                <p>Enter password:</p>
                <input
                  type="text"
                  value={this.state.post}
                  onChange={e => this.setState({post: e.target.value})}
                />
                <button type="submit" style={{marginLeft:"10px"}}>Submit</button>
              </form>
      )
    } else {
      return (
        <form onSubmit={this.handleMessageSubmit}>
                <p>{this.state.user.name}:</p>
                <input
                  type="text"
                  value={this.state.post}
                  onChange={e => this.setState({post: e.target.value})}
                />
                <button type="submit" style={{marginLeft:"10px"}}>Send!</button>
              </form>
      )
    }

  }

  render() {
    return (
      <div className="Chat">
        {this.state.temp}
        <div className="Messages">
          {this.state.messages.map((message, i) => {
            return (
              <Message key={i} author={message.user_name} text={message.text} timestamp={message.created}/>
            )
          })}
        </div>
        <div className="ChatFooter">
        </div>
      </div>
    )
  }

}

export default Chat;