import React, { Component } from 'react';
import Header from './Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import TeamSelect from './TeamSelect';
import Standings from './Standings';
import Info from './Info';
import PastChamps from './PastChamps';

class App extends Component {

  constructor(props) {
    super(props)
  }

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
            <Route path='/info' component={Info}/>
            <Route path='/pastchamps' component={PastChamps}/>
          </div>
        </Router>
      </div>
    )
  }

}

export default App;