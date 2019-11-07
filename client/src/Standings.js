import React, { Component } from 'react';
import StandingNew from './StandingNew';
import './Standings.css'

class Standings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      standings: [],
      updated: '11/7/2019'
    }
  }

  componentDidMount() {
    fetch('/api/standings')
      .then(res => res.json())
      .then(data => {
        this.setState({standings: data})
      })
  }

  render() {
    return (
    <div className="StandingsContainer">
      <h3>PICKS</h3>
      <div className="Standings">
        <div>
          {this.state.standings ? this.state.standings.map((user, i) => {
            return (
              <StandingNew key={i} name={user.name} teams={user.teams_2019}/>
            )
          }) : null}
        </div>
      </div>
      <div className="UpdateTime">UPDATED {this.state.updated}</div>
    </div>
    );
  }

}

export default Standings;