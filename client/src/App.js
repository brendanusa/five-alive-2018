import React, { Component } from 'react';
import Header from './Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import TeamSelect from './TeamSelect';
import StandingsOld from './StandingsOld';
import Home from './Home';
import Info from './Info';
import PastChamps from './PastChamps';

class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Route path='/' exact component={Home}/>
            <Route path='/home' component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/teamselect' component={TeamSelect}/>
            <Route path='/standingsold' component={StandingsOld}/>
            <Route path='/info' component={Info}/>
            <Route path='/pastchamps' component={PastChamps}/>
          </div>
        </Router>
      </div>
    )
  }

}

export default App;