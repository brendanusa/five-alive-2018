import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import TeamSelect from './TeamSelect';
import StandingsOld from './StandingsOld';
import PastChamps from './PastChamps';

class Main extends Component {

  render() {
    return (
      <main>
        <Router>
          <div>
            <Route path='/' exact component={Login}/>
            <Route path='/login' component={Login}/>
            <Route path='/teamselect' component={TeamSelect}/>
            <Route path='/standingsold' component={Standings}/>
            <Route path='/pastchamps' component={PastChamps}>
          </div>
        </Router>
      </main>
    )
  }
}

export default Main;