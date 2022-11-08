import React, { Component } from "react";
import "./TeamSelect.css";

class TeamSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTeams: {},
      user: {},
      post: "",
      submitFeedback: "",
      teamsHard: {},
    };
  }

  componentDidMount() {
    console.log("hello");
    fetch("/api/schools")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ teamsHard: data });
      });
  }

  handleUserBoxSubmit = (e) => {
    e.preventDefault();
    fetch("/api/password?password=" + this.state.post)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]) {
          this.setState({ user: data[0] });
          this.setState({ isAuthenticated: true });
          this.setState({ post: "" });
        } else {
          window.alert("Invalid password!");
        }
      });
  };

  handleTeamsBoxClick = (e) => {
    e.preventDefault();
    document.getElementById(e.target.id).classList.toggle("highlighted");
    let tempState = this.state.selectedTeams;

    if (tempState[e.target.id]) {
      tempState[e.target.id].selected = !tempState[e.target.id].selected;
    } else {
      tempState[e.target.id] = { selected: true };
    }

    this.setState({ selectedTeams: tempState });
  };

  handleSelectBoxSubmit = () => {
    const actualSelectedTeams = Object.keys(this.state.selectedTeams)
      .filter((team) => {
        return this.state.selectedTeams[team].selected === true;
      })
      .map((teamid) => parseInt(teamid));

    const activeWinsTotal = actualSelectedTeams.reduce((acc, val) => {
      return (acc += this.state.teamsHard[val].w2122);
    }, 0);

    if (!this.state.user.name) {
      this.setState({ submitFeedback: "Not signed in!" });
    } else if (actualSelectedTeams.length !== 5) {
      this.setState({ submitFeedback: "Select five teams!" });
    } else if (activeWinsTotal > 100) {
      this.setState({ submitFeedback: ">100! Try again!" });
    } else {
      fetch(
        `/api/teams?teamids=${actualSelectedTeams.join(",")}&userid=${
          this.state.user.id
        }`
      ).then((data) => {
        fetch("/api/password?password=" + this.state.user.password)
          .then((res) => res.json())
          .then((data) => {
            if (data[0]) {
              let tempState = this.state;
              tempState.user = data[0];
              tempState.submitFeedback = "Picks submitted!";
              this.setState({ tempState });
            }
          });
      });
    }
  };

  render() {
    return (
      <div className="TeamSelectTempContainer">
        <div className="TeamSelectTemp">
          <div>
            <h1>BZZZ!</h1>
          </div>
          <div>Team selection time is OVER</div>
        </div>
      </div>
    );
  }
}

// render for post-deadline
// render() {
//   return (
//     <div className="TeamSelectTempContainer">
//       <div className="TeamSelectTemp">
//         <div><h1>BZZZ!</h1></div>
//         <div>Team selection time is OVER</div>
//       </div>
//     </div>
//   )
// }

// render for pre-deadline
// render() {
//     return (
//       <div className="TeamSelect">
//         <div>
//           <div className="UserBox">
//             <div className="UserBoxMessageContainer">
//               <div className="UserBoxMessage">
//                 WELCOME TO THE NCAA TEAM SELECTION PORTAL
//               </div>
//               <div className="UserBoxForm">
//                 {this.state.user.name ? (
//                   this.state.user.name +
//                   " has entered the team selection portal."
//                 ) : (
//                   <form onSubmit={this.handleUserBoxSubmit}>
//                     Enter password:
//                     <input
//                       type="text"
//                       value={this.state.post}
//                       onChange={(e) => this.setState({ post: e.target.value })}
//                     />
//                     <button type="submit" style={{ marginLeft: "10px" }}>
//                       Login
//                     </button>
//                   </form>
//                 )}
//               </div>
//             </div>

//             <div className="UserBoxTeams">
//               Current Teams:
//               <br></br>
//               <div className="UserBoxTeamsList">
//                 <div>{this.state.user.teams_22 ? null : "None"}</div>
//                 <div>
//                   {this.state.user.teams_22
//                     ? this.state.teamsHard[this.state.user.teams_22[0]].name
//                     : null}
//                 </div>
//                 <div>
//                   {this.state.user.teams_22
//                     ? this.state.teamsHard[this.state.user.teams_22[1]].name
//                     : null}
//                 </div>
//                 <div>
//                   {this.state.user.teams_22
//                     ? this.state.teamsHard[this.state.user.teams_22[2]].name
//                     : null}
//                 </div>
//                 <div>
//                   {this.state.user.teams_22
//                     ? this.state.teamsHard[this.state.user.teams_22[3]].name
//                     : null}
//                 </div>
//                 {this.state.user.teams_22
//                   ? this.state.teamsHard[this.state.user.teams_22[4]].name
//                   : null}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="TeamsContainer">
//           <div className="TeamsContainerHeading">
//             <span>School</span>
//             <span>2021-22 W-L</span>
//           </div>
//           <div className="TeamsContainerBody">
//             {Object.entries(this.state.teamsHard).map((team, i) => {
//               return (
//                 <div
//                   className="TeamSelectRow"
//                   id={team[0]}
//                   key={i}
//                   onClick={this.handleTeamsBoxClick}
//                 >
//                   <span id={team[0]} className="MainTeamName">
//                     {team[1].name}
//                   </span>
//                   <span id={team[0]} className="MainTeamRecord">
//                     {team[1].w2122}-{team[1].l2122}
//                   </span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//         <div>
//           <div className="SelectBoxContainer">
//             <div className="SelectBoxHeader">SELECTED TEAMS</div>
//             <div className="SelectBoxTeams">
//               {Object.keys(this.state.selectedTeams)
//                 .filter((team) => {
//                   return this.state.selectedTeams[team].selected === true;
//                 })
//                 .map((teamId) => {
//                   return (
//                     <div key={teamId} className="SelectBoxTeamRow">
//                       <span className="smallteamname">
//                         {this.state.teamsHard[teamId].name + " - "}
//                       </span>
//                       <span className="smallteamwins">
//                         {this.state.teamsHard[teamId].w2122}
//                       </span>
//                     </div>
//                   );
//                 })}
//             </div>
//             <div className="SelectBoxFooter">
//               <div className="SelectBoxWinTotal">
//                 <div>
//                   {Object.keys(this.state.selectedTeams).reduce((acc, val) => {
//                     if (this.state.selectedTeams[val].selected) {
//                       return (acc += this.state.teamsHard[val].w2122);
//                     } else {
//                       return acc;
//                     }
//                   }, 0)}
//                 </div>
//                 <div style={{ fontSize: "10px" }}>WINS</div>
//               </div>
//             </div>
//             <div className="SelectBoxSubmit">
//               <button onClick={this.handleSelectBoxSubmit}>SUBMIT</button>
//             </div>
//             <div className="SelectBoxNotification">
//               {this.state.submitFeedback || null}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

export default TeamSelect;
