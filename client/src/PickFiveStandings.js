import React, { Component } from 'react';
import './PickFiveStandings.css';
import PickFiveStanding from './PickFiveStanding';

class PickFiveStandings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      standings: [],
      isActive: false
    }

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    this.setState({isActive: !this.state.isActive});
    fetch('api/pickfive/standings')
      .then(res => res.json())
      .then(data => {
        console.log('data', data)
        this.setState({standings: data});
      })
  }

  render() {
    return (
    <div className="PickFiveStandingsContainer">
      <h3 onClick={this.handleClick}>2019 FINAL STANDINGS</h3>

      {this.state.isActive ? 

        <div className="PickFiveStandings">
          <div>
          {this.state.standings.map((person, i) => {
            return (<PickFiveStanding key={i} name={person.name} score={person.score} teams={person.teams}/>)
          })}
          </div>
        </div>

        : null
        
      }

    </div>
    );
  }

}

export default PickFiveStandings;