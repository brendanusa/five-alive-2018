import React, { Component } from 'react';
import Header from './Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import PastChamps from './PastChamps';
import Picks from './Picks';
import PickFive from './PickFive';
import TeamSelect from './TeamSelect';
import Basketballs from './Basketballs';

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
            <Route path='/about' component={About}/>
            <Route path='/pastchamps' component={PastChamps}/>
            <Route path='/picks' component={Picks}/>
            <Route path='/pickfive' component={PickFive}/>
            <Route path='/teamselect' component={TeamSelect}/>
            <Route path='/basketballs' component={Basketballs}/>
          </div>
        </Router>
      </div>
    )
  }

}

export default App;