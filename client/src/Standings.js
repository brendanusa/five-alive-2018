import React, { Component } from 'react';
import StandingNew from './StandingNew';
import './Standings.css'

class Standings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      standings: []
    }
  }

  componentDidMount() {
    fetch('/api/standings')
      .then(res => res.json())
      .then(data => {
        data = data.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          } else {
            return 1;
          }
        })
        this.setState({standings: data})
      })
  }

  render() {
    return (
    <div className="StandingsContainer">
      <div className="Standings">
        <div>
          {this.state.standings.map((standing, i) => {
            return (
              <StandingNew key={i} name={standing.name} teams={standing.teams_2018}/>
            )
          })}
        </div>
      </div>
    </div>
    );
  }

}

export default Standings;