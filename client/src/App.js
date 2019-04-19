import React, { Component } from 'react';
import Header from './Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
// import TeamSelect from './TeamSelect';
import Home from './Home';
import About from './About';
import PastChamps from './PastChamps';
import Picks from './Picks';
import Stats from './Stats';
import History from './History';
import PickFive from './PickFive';

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
            <Route path='/about' component={About}/>
            <Route path='/pastchamps' component={PastChamps}/>
            <Route path='/picks' component={Picks}/>
            <Route path='/history' component={History}/>
            <Route path='/stats' component={Picks}/>
            <Route path='/pickfive' component={PickFive}/>
          </div>
        </Router>
      </div>
    )
  }

}

export default App;