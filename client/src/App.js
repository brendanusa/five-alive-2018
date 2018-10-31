import React, { Component } from 'react';
import Header from './Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import TeamSelect from './TeamSelect';
import Standings from './Standings';

class App extends Component {

  // constructor(props) {
  //   this.state = {
  //     isAuthenticated = false;
  //   }
  // }

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