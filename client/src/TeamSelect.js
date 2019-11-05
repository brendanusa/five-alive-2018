import React, { Component } from 'react';
import './TeamSelect.css';
import Team from './Team';

class TeamSelect extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTeams: {},
      user: {},
      post: '',
      submitFeedback: '',
      teamsHard: []
    };
  }

  componentDidMount() {
    fetch('/api/schools')
      .then(res => res.json())
      .then(data => {
        this.setState({teamsHard: data})
      })
  }

  handleUserBoxSubmit = (e) => {
    e.preventDefault();
      fetch('/api/password?password=' + this.state.post)
        .then(res => res.json())
        .then(data => {
          if (data[0]) {
            console.log('DATA!', data[0])
            this.setState({user: data[0]});
            this.setState({isAuthenticated: true});
            this.setState({post: ''})
          } else {
            window.alert('Invalid password!')
          }
        })
  }

  handleTeamsBoxClick = (e) => {

    e.preventDefault();
    document.getElementById(e.target.id).classList.toggle('highlighted');
    let tempState = this.state.selectedTeams;

    if (tempState[e.target.id]) {
      tempState[e.target.id].selected = !tempState[e.target.id].selected;
    } else {
      tempState[e.target.id] = {selected: true};
    }

    this.setState({selectedTeams: tempState});

  }

  handleSelectBoxSubmit = () => {
    
    const actualSelectedTeams = Object.keys(this.state.selectedTeams).filter(team => {
        return this.state.selectedTeams[team].selected === true;
      }).map(teamid => parseInt(teamid) + 2);

    const activeWinsTotal = actualSelectedTeams.reduce((acc, val) => {
      return acc += this.state.teamsHard[val - 2].w1819
    }, 0)

    console.log('activeWinsTotal', activeWinsTotal)

    if (!this.state.user.name) {
      this.setState({submitFeedback: 'Not signed in!'});
    } else if (actualSelectedTeams.length !== 5) {
      this.setState({submitFeedback: 'Select five teams!'});
    } else if (activeWinsTotal > 100) {
      this.setState({submitFeedback: 'Try again!'});
    } else {
      fetch(`/api/teams?teamids=${actualSelectedTeams.join(',')}&userid=${this.state.user.id}`)
        .then(data => {
          fetch('/api/password?password=' + this.state.user.password)
            .then(res => res.json())
            .then(data => {
              console.log(data[0])
              if (data[0]) {
                let tempState = this.state;
                tempState.user = data[0];
                tempState.submitFeedback = 'Picks submitted!';
                this.setState({tempState});
              }
            })
        })
    }

  }

// inside map for Team comp
// <Team key={i} name={team.name} w={team.w} l={team.l} handleClick={this.handleTeamsBoxClick.bind(this)}/>

  render() {
    return (
      <div className="TeamSelect">
        <div>
          <div className="UserBox">
            <div className="UserBoxMessageContainer">
              <div className="UserBoxMessage">WELCOME TO THE NCAA TEAM SELECTION PORTAL</div>
              <div className="UserBoxForm">{this.state.user.name ? this.state.user.name+' has entered the team selection portal.' : 
                  <form onSubmit={this.handleUserBoxSubmit}>
                    Enter password:
                    <input
                      type="text"
                      value={this.state.post}
                      onChange={e => this.setState({post: e.target.value})}
                    />
                    <button type="submit" style={{marginLeft:"10px"}}>Login</button>
                  </form>
                }
              </div>
            </div>

            <div className="UserBoxTeams">
              Current Teams:
              <br></br>
              <p className="UserBoxTeamsList">
                <div>
                {this.state.user.teams_2019 ? null : 'None'}
                </div>
                <div>
                {this.state.user.teams_2019 ? this.state.teamsHard[this.state.user.teams_2019[0] - 2].name : null}
                </div>
                <div>
                {this.state.user.teams_2019 ? this.state.teamsHard[this.state.user.teams_2019[1] - 2].name : null}
                </div>
                <div>
                {this.state.user.teams_2019 ? this.state.teamsHard[this.state.user.teams_2019[2] - 2].name : null}
                </div>
                <div>
                {this.state.user.teams_2019 ? this.state.teamsHard[this.state.user.teams_2019[3] - 2].name : null}
                </div>
                {this.state.user.teams_2019 ? this.state.teamsHard[this.state.user.teams_2019[4] - 2].name : null}
              </p>
            </div>
          </div>
        </div>
        <div className="TeamsContainer">
          <div className="TeamsContainerHeading">
            <span>School</span>
            <span>2018-19 W-L</span>
          </div>
          <div className="TeamsContainerBody">
            {this.state.teamsHard.map((team, i) => {
              return (
                <div className="TeamSelectRow" id={i} onClick={this.handleTeamsBoxClick}>
                  <span id={i} className="MainTeamName">{team.name}</span>
                  <span id={i} className="MainTeamRecord">{team.w1819}-{team.l1819}</span>
                </div>
              )
            })}
          </div>
        </div>
        <div>
          <div className="SelectBoxContainer">
            <div className="SelectBoxHeader">
              SELECTED TEAMS
            </div>
            <div className="SelectBoxTeams">
              {Object.keys(this.state.selectedTeams).filter((team) => {
                return this.state.selectedTeams[team].selected === true;
              }).map((teamId) => {
                return (
                  <div key={teamId} className="SelectBoxTeamRow">
                    <span className="smallteamname">
                      {this.state.teamsHard[teamId].name + ' - '}
                    </span>
                    <span className="smallteamwins">
                      {this.state.teamsHard[teamId].w1819}
                    </span>
                  </div>
                )
              })}
            </div>
            <div className="SelectBoxFooter">
              <div className="SelectBoxWinTotal">
                <div>
                  {Object.keys(this.state.selectedTeams).reduce((acc, val) => {
                      if (this.state.selectedTeams[val].selected) {
                          return acc += this.state.teamsHard[val].w1819;
                        } else {
                          return acc;
                        }
                  }, 0)}
                </div>
                <div style={{fontSize:"10px"}}>WINS</div>
              </div>
            </div>
            <div className="SelectBoxSubmit">
              <button onClick={this.handleSelectBoxSubmit}>SUBMIT</button>
            </div>
            <div className="SelectBoxNotification">
              {this.state.submitFeedback || null}
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default TeamSelect;

// render for post-deadline
      // <div className="TeamSelectTempContainer">
      //   <div className="TeamSelectTemp">
      //     NICE TRY! Team select for 2018-2019 is OVER!
      //   </div>
      // </div>