import './Home.css';
import React, { Component } from 'react';
import Chat from './Chat';
import Standings from './Standings';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      passwordFeedback: '',
      post: '',
      authenticated: false
    }
  }

  handleSubmit = e => {
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
          this.setState({passwordFeedback: `Welcome ${this.state.user.name.split(' ')[0]}!`});
        } else {
          this.setState({passwordFeedback: 'No good!'});
        }
      })
  };

  render() {
    return (
      <div className="Home">
      <div><Standings /></div>
      <div><Chat /></div>
      </div>
    );
  }
}

export default Home;