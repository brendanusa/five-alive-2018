import React, { Component } from 'react';
import './Chat.css';
import Message from './Message';
import io from "socket.io-client";
import logo from './fivealivelogo.jpg'

class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      post: '',
      user: {},
      messages: [],
      port: 5000
    }

    // this.socket = io(`localhost:${this.state.port}`);
    this.socket = io();

    var context = this;

    this.updateScroll = () => {
      var element = document.getElementById("scrollhere");
      element.scrollTop = element.scrollHeight;
    }

    this.socket.on('RECEIVE_MESSAGE', function(data){
      fetch('/api/messages')
        .then(res => res.json())
        .then(data => {
          context.setState({messages: data})
          context.updateScroll()
        })

    });

    this.validCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A',
    'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','!','?','-','+','1','2','3','4','5','6','7','8','9','0','"'];

  }

  componentDidMount() {
    fetch('/api/messages')
      .then(res => res.json())
      .then(data => {
        this.setState({messages: data})
      })

    // fetch('/api/port')
    //   .then(res => {
    //     console.log(res)
    //     return res.json()
    //   })
    //   .then(data => {
    //     console.log(typeof data)
    //     this.setState({port: data})
    //   })
    //   .then(() => console.log('PORT', this.state.port))
  }

  checkChars = message => {
    for (let i = 0; i < message.length; i++) {
      if (!this.validCharacters.includes(message[i])) {
        console.log('message[i]', message[i])
        return false;
      }
    }
    return true;
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
            this.setState({isAuthenticated: true});
            this.setState({post: ''})
          } else {
            window.alert('Invalid password!')
          }
        })
  }


  handleMessageSubmit = e => {
    e.preventDefault();
    console.log(this.state.post)
    if (this.state.post.length === 0 || this.state.post.length > 200) {
      return window.alert('Please enter between 1 and 200 characters!');
    }
    if (!this.checkChars(this.state.post)) {
      return window.alert('Letters, numbers, !, ?, +, ", and - only! No fancy stuff.');
    }
    fetch(`/api/message?userid=${this.state.user.id}&username=${this.state.user.name}&text=${this.state.post}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data) {
          this.socket.emit('SEND_MESSAGE', {
              author: this.state.user.name,
              message: this.state.post
          });
          this.setState({post: ''});
        } else {
          window.alert('Message failed!')
        }
      })
  }

  handleSubmit = (e) => {
    if (this.state.isAuthenticated) {
      this.handleMessageSubmit(e);
    } else {
      this.handlePasswordSubmit(e);
    }
  }

  render() {
    return (
      <div className="Chat">
        <div className="ChatHeader">
          <span>CHAT POWERED BY</span>
          <span><img src={logo} alt="logo" style={{width:"145px", height:"32px"}} /></span>
          <span>CHAT TECHNOLOGY</span>
        </div>
        <div className="Messages" id="scrollhere">
          {this.state.messages.map((message, i) => {
            return (
              <Message key={i} author={message.user_name} text={message.text} timestamp={message.created}/>
            )
          })}
        </div>
        <div className="ChatFooter">
          <form onSubmit={this.handleSubmit}>
            <span>{this.state.isAuthenticated ? `Posting as ${this.state.user.name}! ` : 'Enter password to join-->'}</span>
            <input
              type="text"
              value={this.state.post}
              onChange={e => this.setState({post: e.target.value})}
              style={{width:"40%"}}
            />
            <button type="submit" style={{marginLeft:"10px"}}>{this.state.isAuthenticated ? 'Send' : 'Submit'}</button>
          </form>
        </div>
      </div>
    )
  }

}

export default Chat;