import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import TeamSelect from './TeamSelect';
import Standings from './Standings';

class Main extends Component {

  componentDidMount() {
    console.log('main mounted')
  }

  render() {
    const Main = () => (
      <div>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/teamselect" component={TeamSelect}/>
            <Route path="/standings" component={Standings}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <Main/>
      </Switch>
    )
  }

}

 export default Main;