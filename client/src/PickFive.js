import React, { Component } from 'react';
import './PickFive.css';
import PickFiveStandings from './PickFiveStandings';
import PickFiveChamps from './PickFiveChamps';
import PickFiveHighScores from './PickFiveHighScores';

class PickFive extends Component {

  constructor(props) {

    super(props);
    this.state = {
      // testimonialsActive: false
    }

  }

  render() {
    return (
      <div>
        <div id="dim">
          <div className="PickFiveDescription">
          Welcome to the PICK 5, #5ALIVE'S tournament-only cousin. Gaze in awe at the the all-time high scores, or take an inspiring stroll down the Hall of Champions.
          </div>
          <div className="PickFive">
            <div className="PickFiveStandings"><PickFiveStandings /></div>
            <div className="PickFiveChamps"><PickFiveChamps /></div>
            <div className="PickFiveHighScores"><PickFiveHighScores /></div>
          </div>
        </div>
      </div>
    );
  }

}

export default PickFive;