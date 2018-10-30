import React, { Component } from 'react';
import "./Login.css";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      passwordFeedback: '',
      user: '',
      post: ''
    }
  }

  componentDidMount() {
    console.log('login page mounted')
    // this.callApi()
    //   .then(res => this.setState({ response: res.express }))
    //   .catch(err => console.log(err));
  }

  // callApi = async () => {
  //   const response = await fetch('/api/hello');
  //   const body = await response.json();
  //   if (response.status !== 200) throw Error(body.message);
  //   return body;
  // };

  handleSubmit = e => {
    e.preventDefault();
    fetch('/api/password?password=' + e)
      .then(res => res.json())
      .then(username => {
        if (username) {
          this.setState({passwordFeedback: 'Accepted!'})
        } else {
          this.setState({passwordFeedback: 'No good!'})
        }
      })
      .then(username => this.setState({ user: username }))
  };

  render() {
    return (
      <div className="Login">
        <div id="logincontainer">
        <div id="containercontents" />
          <p><strong>Come get some nice #5ALIVE</strong></p>
            <form onSubmit={this.handleSubmit}>
              <p>Enter password:</p>
              <input
                type="text"
                value={this.state.post}
                onChange={e => this.setState({ post: e.target.value })}
              />
              <button type="submit" style={{marginLeft:"10px"}}>Submit</button>
            </form>
          <p>{this.state.passwordFeedback}</p>
        </div>
      </div>
    );
  }
}

export default Login;