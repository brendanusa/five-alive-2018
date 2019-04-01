import React, { Component } from 'react';
import StandingNew from './StandingNew';
import './Standings.css'

class Standings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      standings: [],
      updated: '4/1/2019'
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
      <h3>STANDINGS</h3>
      <div className="Standings">
        <div>
          {this.state.standings ? this.state.standings.map((user, i) => {
            return (
              <StandingNew key={i} name={user.name} wins={user.wins} teams={user.teams_2018}/>
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