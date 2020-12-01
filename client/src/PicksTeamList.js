import React, { Component } from 'react';
import './PicksTeamList.css';

class PicksTeamList extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return(
      <div className="PicksTeamList">
        <div className="pointer"></div>
          <div className="PicksTeamListContainer">
            {this.props.teams.map((team, i) => {
              return (
                <div className="PicksTeamContainer">
                  <div key={i} className={"PicksTeam" + [i]}>
                    {team.name} ({team.w2019}-{team.l2020})
                  </div>
                </div>
              )
            })}
          </div>
      </div>
    )

  }

}

// insert this before map to sort teams by wins
// .sort((a, b) => b.w2018-a.w2018)

export default PicksTeamList;