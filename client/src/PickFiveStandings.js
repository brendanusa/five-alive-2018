import React, { Component } from 'react';
import './PickFiveStandings.css';
import PickFiveStanding from './PickFiveStanding';

// const PickFiveStandingHard = (props) => {
//   return (
//     <div className="PickFiveStandingHard">
//       <span>{props.name}</span>
//       <span>{props.wins}</span>
//     </div>
//   )
// }

class PickFiveStandings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      standingsHard: {
        'Dave Andrist': 149,
        'Chris Godfrey': 110,
        'T. French/S. Reiman': 110,
        'Brendan Bansavage': 104,
        'Chris Jennings': 87,
        'Nick Kordesch': 86,
        'Gil Estupinan': 85,
        'Zach Baron': 65,
        'Patrick Godfrey': 54,
        'Toby Perry': 54,
        'Dan Vogel': 51,
        'Noah Garber': 50,
        'Alex Raup': 48,
        'Coreen Kopper': 45,
        'Krysti Walker': 39,
        'Matt Gordon': 32,
        'Casey Schutte': 25,
        'Andrew Soltish': 22,
        'Reed Lyon': 19,
        'Dillon Smith': 18,
        'Patrick Cushing': 18,
        'Anish Kurian': 12,
      }
    }

  }

  render() {
    return (
    <div className="PickFiveStandingsContainer">
      <h3>2019 Final Standings</h3>
      <div className="PickFiveStandings">
        <div>
        {Object.keys(this.state.standingsHard).map((person, i) => {
          return (<PickFiveStanding key={i} name={person} score={this.state.standingsHard[person]}/>)
        })}
        </div>
      </div>
    </div>
    );
  }

}

export default PickFiveStandings;