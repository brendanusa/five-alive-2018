import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "./Login.css";
import Testimonials from './Testimonials';
import Chat from './Chat';
import { subscribeToTimer } from './api';

console.log(typeof subscribeToTimer)

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      passwordFeedback: '',
      post: '',
      authenticated: false,
      timestamp: 'nothing yet'
    }
    subscribeToTimer((err, timestamp) => this.setState({ 
      timestamp 
    }));
  }

  // componentDidMount() {
    // this.callApi()
    //   .then(res => this.setState({ response: res.express }))
    //   .catch(err => console.log(err));
  // }

  // callApi = async () => {
  //   const response = await fetch('/api/hello');
  //   const body = await response.json();
  //   if (response.status !== 200) throw Error(body.message);
  //   return body;
  // };

  // componentWillUpdate() {

  // }

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
      <div className="Login">
      {this.state.timestamp}
        <Chat />
      </div>
    );
  }
}

export default Login;

        // <div id="logincontainer">
        //   <p><strong>Come get some nice #5ALIVE</strong></p>
        //     <form onSubmit={this.handleSubmit}>
        //       <p>Enter password:</p>
        //       <input
        //         type="text"
        //         value={this.state.post}
        //         onChange={e => this.setState({post: e.target.value})}
        //       />
        //       <button type="submit" style={{marginLeft:"10px"}}>Submit</button>
        //     </form>
        //   <br></br>
        //   <p className="notification">{this.state.passwordFeedback}</p>
        //   <p>
        //     {this.state.authenticated ? 
        //       <Link 
        //         to={{ 
        //         pathname: '/teamselect',
        //         state: {user: this.state.user} 
        //       }}><strong>CLICK HERE TO PICK YOUR TEAMS</strong></Link>
        //       : null
        //     }
        //   </p>
        // </div>
        // <Testimonials />