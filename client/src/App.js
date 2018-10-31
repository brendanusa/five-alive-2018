import React, { Component } from 'react';
import Header from './Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import TeamSelect from './TeamSelect';
import Standings from './Standings';

class App extends Component {

  constructor(props) {
    super(props)
  }

  handleSubmit = e => {
    e.preventDefault();
    fetch('/api/password?password=' + e)
      .then(res => res.json())
      .then(user => {
        if (user) {
          this.setState({
            passwordFeedback: 'Thank you!',
            isAuthenticated: true
          })
        } else {
          this.setState({passwordFeedback: 'No good!'})
        }
      })
      .then(username => this.setState({ userId: username,  }))
  };

  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />
            <Route path='/' exact component={Login}/>
            <Route path='/login' component={Login}/>
            <Route path='/teamselect' component={TeamSelect}/>
            <Route path='/standings' component={Standings}/>
          </div>
        </Router>
      </div>
    )
  }

}

export default App;