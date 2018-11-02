import React, { Component } from 'react';
import './TeamSelect.css';
import Team from './Team';

class TeamSelect extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTeams: {},
      user: {},
      submitFeedback: '',
      teamsHard: [
        {name: 'Air Force', w: 12, l: 19},
        {name: 'Akron', w: 14, l: 18},
        {name: 'Alabama', w: 20, l: 16},
        {name: 'Alabama A&M', w: 3, l: 28},
        {name: 'Alabama State', w: 8, l: 23},
        {name: 'Alabama-Birmingham', w: 20, l: 13},
        {name: 'Albany (NY)', w: 22, l: 10},
        {name: 'Alcorn State', w: 11, l: 21},
        {name: 'American', w: 6, l: 24},
        {name: 'Appalachian State', w: 15, l: 18},
        {name: 'Arizona', w: 27, l: 8},
        {name: 'Arizona State', w: 20, l: 12},
        {name: 'Arkansas', w: 23, l: 12},
        {name: 'Arkansas State', w: 11, l: 21},
        {name: 'Arkansas-Pine Bluff', w: 14, l: 21},
        {name: 'Army', w: 13, l: 17},
        {name: 'Auburn', w: 26, l: 8},
        {name: 'Austin Peay', w: 19, l: 15},
        {name: 'Ball State', w: 19, l: 13},
        {name: 'Baylor', w: 19, l: 15},
        {name: 'Belmont', w: 24, l: 9},
        {name: 'Bethune-Cookman', w: 18, l: 14},
        {name: 'Binghamton', w: 11, l: 20},
        {name: 'Boise State', w: 23, l: 9},
        {name: 'Boston College', w: 19, l: 16},
        {name: 'Boston University', w: 15, l: 16},
        {name: 'Bowling Green State', w: 16, l: 16},
        {name: 'Bradley', w: 20, l: 13},
        {name: 'Brigham Young', w: 24, l: 11},
        {name: 'Brown', w: 11, l: 16},
        {name: 'Bryant', w: 3, l: 28},
        {name: 'Bucknell', w: 25, l: 10},
        {name: 'Buffalo', w: 27, l: 9},
        {name: 'Butler', w: 21, l: 14},
        {name: 'Cal Poly', w: 9, l: 22},
        {name: 'Cal State Bakersfield', w: 12, l: 18},
        {name: 'Cal State Fullerton', w: 20, l: 12},
        {name: 'Cal State Northridge', w: 6, l: 24},
        {name: 'Campbell', w: 18, l: 16},
        {name: 'Canisius', w: 21, l: 12},
        {name: 'Central Arkansas', w: 18, l: 17},
        {name: 'Central Connecticut State', w: 14, l: 18},
        {name: 'Central Florida', w: 19, l: 13},
        {name: 'Central Michigan', w: 21, l: 15},
        {name: 'Charleston Southern', w: 15, l: 16},
        {name: 'Charlotte', w: 6, l: 23},
        {name: 'Chattanooga', w: 10, l: 23},
        {name: 'Chicago State', w: 3, l: 29},
        {name: 'Cincinnati', w: 31, l: 5},
        {name: 'Citadel', w: 11, l: 21},
        {name: 'Clemson', w: 25, l: 10},
        {name: 'Cleveland State', w: 12, l: 23},
        {name: 'Coastal Carolina', w: 14, l: 18},
        {name: 'Colgate', w: 19, l: 14},
        {name: 'College of Charleston', w: 26, l: 8},
        {name: 'Colorado', w: 17, l: 15},
        {name: 'Colorado State', w: 11, l: 21},
        {name: 'Columbia', w: 8, l: 19},
        {name: 'Connecticut', w: 14, l: 18},
        {name: 'Coppin State', w: 5, l: 27},
        {name: 'Cornell', w: 12, l: 16},
        {name: 'Creighton', w: 21, l: 12},
        {name: 'Dartmouth', w: 7, l: 20},
        {name: 'Davidson', w: 21, l: 12},
        {name: 'Dayton', w: 14, l: 17},
        {name: 'Delaware', w: 14, l: 19},
        {name: 'Delaware State', w: 4, l: 28},
        {name: 'Denver', w: 15, l: 15},
        {name: 'DePaul', w: 11, l: 20},
        {name: 'Detroit Mercy', w: 8, l: 24},
        {name: 'Drake', w: 17, l: 17},
        {name: 'Drexel', w: 13, l: 20},
        {name: 'Duke', w: 29, l: 8},
        {name: 'Duquesne', w: 16, l: 16},
        {name: 'East Carolina', w: 10, l: 20},
        {name: 'East Tennessee State', w: 25, l: 9},
        {name: 'Eastern Illinois', w: 12, l: 19},
        {name: 'Eastern Kentucky', w: 11, l: 20},
        {name: 'Eastern Michigan', w: 22, l: 13},
        {name: 'Eastern Washington', w: 20, l: 15},
        {name: 'Elon', w: 14, l: 18},
        {name: 'Evansville', w: 17, l: 15},
        {name: 'Fairfield', w: 17, l: 16},
        {name: 'Fairleigh Dickinson', w: 13, l: 18},
        {name: 'Florida', w: 21, l: 13},
        {name: 'Florida A&M', w: 9, l: 25},
        {name: 'Florida Atlantic', w: 12, l: 19},
        {name: 'Florida Gulf Coast', w: 23, l: 12},
        {name: 'Florida International', w: 14, l: 18},
        {name: 'Florida State', w: 23, l: 12},
        {name: 'Fordham', w: 9, l: 22},
        {name: 'Fort Wayne', w: 18, l: 15},
        {name: 'Fresno State', w: 21, l: 11},
        {name: 'Furman', w: 23, l: 10},
        {name: 'Gardner-Webb', w: 14, l: 18},
        {name: 'George Mason', w: 16, l: 17},
        {name: 'George Washington', w: 15, l: 18},
        {name: 'Georgetown', w: 15, l: 15},
        {name: 'Georgia', w: 18, l: 15},
        {name: 'Georgia Southern', w: 21, l: 12},
        {name: 'Georgia State', w: 24, l: 11},
        {name: 'Georgia Tech', w: 13, l: 19},
        {name: 'Gonzaga', w: 32, l: 5},
        {name: 'Grambling', w: 17, l: 14},
        {name: 'Grand Canyon', w: 22, l: 12},
        {name: 'Green Bay', w: 13, l: 20},
        {name: 'Hampton', w: 18, l: 16},
        {name: 'Hartford', w: 19, l: 14},
        {name: 'Harvard', w: 18, l: 14},
        {name: 'Hawaii', w: 17, l: 13},
        {name: 'High Point', w: 14, l: 16},
        {name: 'Hofstra', w: 19, l: 12},
        {name: 'Holy Cross', w: 12, l: 19},
        {name: 'Houston', w: 27, l: 8},
        {name: 'Houston Baptist', w: 6, l: 25},
        {name: 'Howard', w: 10, l: 23},
        {name: 'Idaho', w: 22, l: 9},
        {name: 'Idaho State', w: 14, l: 16},
        {name: 'Illinois', w: 14, l: 18},
        {name: 'Illinois State', w: 18, l: 15},
        {name: 'Illinois-Chicago', w: 20, l: 16},
        {name: 'Incarnate Word', w: 7, l: 21},
        {name: 'Indiana', w: 16, l: 15},
        {name: 'Indiana State', w: 13, l: 18},
        {name: 'Iona', w: 20, l: 14},
        {name: 'Iowa', w: 14, l: 19},
        {name: 'Iowa State', w: 13, l: 18},
        {name: 'IUPUI', w: 11, l: 19},
        {name: 'Jackson State', w: 12, l: 20},
        {name: 'Jacksonville', w: 15, l: 18},
        {name: 'Jacksonville State', w: 23, l: 13},
        {name: 'James Madison', w: 10, l: 22},
        {name: 'Kansas', w: 31, l: 8},
        {name: 'Kansas State', w: 25, l: 12},
        {name: 'Kennesaw State', w: 10, l: 20},
        {name: 'Kent State', w: 17, l: 17},
        {name: 'Kentucky', w: 26, l: 11},
        {name: 'La Salle', w: 13, l: 19},
        {name: 'Lafayette', w: 10, l: 21},
        {name: 'Lamar', w: 19, l: 14},
        {name: 'Lehigh', w: 16, l: 14},
        {name: 'Liberty', w: 22, l: 15},
        {name: 'Lipscomb', w: 23, l: 10},
        {name: 'Little Rock', w: 7, l: 25},
        {name: 'Long Beach State', w: 15, l: 18},
        {name: 'Long Island University', w: 18, l: 17},
        {name: 'Longwood', w: 7, l: 26},
        {name: 'Louisiana', w: 27, l: 7},
        {name: 'Louisiana State', w: 18, l: 15},
        {name: 'Louisiana Tech', w: 17, l: 16},
        {name: 'Louisiana-Monroe', w: 16, l: 16},
        {name: 'Louisville', w: 22, l: 14},
        {name: 'Loyola (IL)', w: 32, l: 6},
        {name: 'Loyola (MD)', w: 9, l: 22},
        {name: 'Loyola Marymount', w: 11, l: 20},
        {name: 'Maine', w: 6, l: 26},
        {name: 'Manhattan', w: 14, l: 17},
        {name: 'Marist', w: 6, l: 25},
        {name: 'Marquette', w: 21, l: 14},
        {name: 'Marshall', w: 25, l: 11},
        {name: 'Maryland', w: 19, l: 13},
        {name: 'Maryland-Baltimore County', w: 25, l: 11},
        {name: 'Maryland-Eastern Shore', w: 7, l: 25},
        {name: 'Massachusetts', w: 13, l: 20},
        {name: 'Massachusetts-Lowell', w: 12, l: 18},
        {name: 'McNeese State', w: 12, l: 17},
        {name: 'Memphis', w: 21, l: 13},
        {name: 'Mercer', w: 19, l: 15},
        {name: 'Miami (FL)', w: 22, l: 10},
        {name: 'Miami (OH)', w: 16, l: 18},
        {name: 'Michigan', w: 33, l: 8},
        {name: 'Michigan State', w: 30, l: 5},
        {name: 'Middle Tennessee', w: 25, l: 8},
        {name: 'Milwaukee', w: 16, l: 17},
        {name: 'Minnesota', w: 15, l: 17},
        {name: 'Mississippi', w: 12, l: 20},
        {name: 'Mississippi State', w: 25, l: 12},
        {name: 'Mississippi Valley State', w: 4, l: 28},
        {name: 'Missouri', w: 20, l: 13},
        {name: 'Missouri State', w: 18, l: 15},
        {name: 'Missouri-Kansas City', w: 10, l: 22},
        {name: 'Monmouth', w: 11, l: 20},
        {name: 'Montana', w: 26, l: 8},
        {name: 'Montana State', w: 13, l: 19},
        {name: 'Morehead State', w: 8, l: 21},
        {name: 'Morgan State', w: 13, l: 18},
        {name: 'Mount St. Mary\'s', w: 18, l: 14},
        {name: 'Murray State', w: 26, l: 6},
        {name: 'Navy', w: 20, l: 12},
        {name: 'Nebraska', w: 22, l: 11},
        {name: 'Nevada', w: 29, l: 8},
        {name: 'Nevada-Las Vegas', w: 20, l: 13},
        {name: 'New Hampshire', w: 10, l: 21},
        {name: 'New Mexico', w: 19, l: 15},
        {name: 'New Mexico State', w: 28, l: 6},
        {name: 'New Orleans', w: 16, l: 17},
        {name: 'Niagara', w: 19, l: 14},
        {name: 'Nicholls State', w: 21, l: 11},
        {name: 'NJIT', w: 14, l: 16},
        {name: 'Norfolk State', w: 14, l: 19},
        {name: 'North Carolina', w: 26, l: 11},
        {name: 'North Carolina A&T', w: 20, l: 15},
        {name: 'North Carolina Central', w: 19, l: 16},
        {name: 'North Carolina State', w: 21, l: 12},
        {name: 'North Carolina-Asheville', w: 21, l: 13},
        {name: 'North Carolina-Greensboro', w: 27, l: 8},
        {name: 'North Carolina-Wilmington', w: 11, l: 21},
        {name: 'North Dakota', w: 12, l: 20},
        {name: 'North Dakota State', w: 15, l: 17},
        {name: 'North Florida', w: 14, l: 19},
        {name: 'North Texas', w: 20, l: 18},
        {name: 'Northeastern', w: 23, l: 10},
        {name: 'Northern Arizona', w: 5, l: 27},
        {name: 'Northern Colorado', w: 26, l: 12},
        {name: 'Northern Illinois', w: 13, l: 19},
        {name: 'Northern Iowa', w: 16, l: 16},
        {name: 'Northern Kentucky', w: 22, l: 10},
        {name: 'Northwestern', w: 15, l: 17},
        {name: 'Northwestern State', w: 4, l: 25},
        {name: 'Notre Dame', w: 21, l: 15},
        {name: 'Oakland', w: 19, l: 14},
        {name: 'Ohio', w: 14, l: 17},
        {name: 'Ohio State', w: 25, l: 9},
        {name: 'Oklahoma', w: 18, l: 14},
        {name: 'Oklahoma State', w: 21, l: 15},
        {name: 'Old Dominion', w: 25, l: 7},
        {name: 'Omaha', w: 9, l: 22},
        {name: 'Oral Roberts', w: 11, l: 21},
        {name: 'Oregon', w: 23, l: 13},
        {name: 'Oregon State', w: 16, l: 16},
        {name: 'Pacific', w: 14, l: 18},
        {name: 'Penn State', w: 26, l: 13},
        {name: 'Pennsylvania', w: 24, l: 9},
        {name: 'Pepperdine', w: 6, l: 26},
        {name: 'Pittsburgh', w: 8, l: 24},
        {name: 'Portland', w: 10, l: 22},
        {name: 'Portland State', w: 20, l: 14},
        {name: 'Prairie View', w: 16, l: 18},
        {name: 'Presbyterian', w: 11, l: 21},
        {name: 'Princeton', w: 13, l: 16},
        {name: 'Providence', w: 21, l: 14},
        {name: 'Purdue', w: 30, l: 7},
        {name: 'Quinnipiac', w: 12, l: 21},
        {name: 'Radford', w: 23, l: 13},
        {name: 'Rhode Island', w: 26, l: 8},
        {name: 'Rice', w: 7, l: 24},
        {name: 'Richmond', w: 12, l: 20},
        {name: 'Rider', w: 22, l: 10},
        {name: 'Robert Morris', w: 16, l: 17},
        {name: 'Rutgers', w: 15, l: 19},
        {name: 'Sacramento State', w: 7, l: 25},
        {name: 'Sacred Heart', w: 10, l: 21},
        {name: 'Saint Francis (PA)', w: 18, l: 13},
        {name: 'Saint Joseph\'s', w: 16, l: 16},
        {name: 'Saint Louis', w: 17, l: 16},
        {name: 'Saint Mary\'s (CA)', w: 30, l: 6},
        {name: 'Saint Peter\'s', w: 14, l: 18},
        {name: 'Sam Houston State', w: 21, l: 15},
        {name: 'Samford', w: 10, l: 22},
        {name: 'San Diego', w: 20, l: 14},
        {name: 'San Diego State', w: 22, l: 11},
        {name: 'San Francisco', w: 22, l: 17},
        {name: 'San Jose State', w: 4, l: 26},
        {name: 'Santa Clara', w: 11, l: 20},
        {name: 'Savannah State', w: 15, l: 17},
        {name: 'Seattle', w: 20, l: 14},
        {name: 'Seton Hall', w: 22, l: 12},
        {name: 'Siena', w: 8, l: 24},
        {name: 'SIU Edwardsville', w: 9, l: 21},
        {name: 'South Alabama', w: 14, l: 18},
        {name: 'South Carolina', w: 17, l: 16},
        {name: 'South Carolina State', w: 10, l: 22},
        {name: 'South Carolina Upstate', w: 7, l: 25},
        {name: 'South Dakota', w: 26, l: 9},
        {name: 'South Dakota State', w: 28, l: 7},
        {name: 'South Florida', w: 10, l: 22},
        {name: 'Southeast Missouri State', w: 14, l: 17},
        {name: 'Southeastern Louisiana', w: 22, l: 12},
        {name: 'Southern', w: 15, l: 18},
        {name: 'Southern California', w: 24, l: 12},
        {name: 'Southern Illinois', w: 20, l: 13},
        {name: 'Southern Methodist', w: 17, l: 16},
        {name: 'Southern Mississippi', w: 16, l: 18},
        {name: 'Southern Utah', w: 13, l: 19},
        {name: 'St. Bonaventure', w: 26, l: 8},
        {name: 'St. Francis (NY)', w: 13, l: 18},
        {name: 'St. John\'s (NY)', w: 16, l: 17},
        {name: 'Stanford', w: 19, l: 16},
        {name: 'Stephen F. Austin', w: 28, l: 7},
        {name: 'Stetson', w: 12, l: 20},
        {name: 'Stony Brook', w: 13, l: 19},
        {name: 'Syracuse', w: 23, l: 14},
        {name: 'Temple', w: 17, l: 16},
        {name: 'Tennessee', w: 26, l: 9},
        {name: 'Tennessee State', w: 15, l: 15},
        {name: 'Tennessee Tech', w: 19, l: 14},
        {name: 'Tennessee-Martin', w: 10, l: 21},
        {name: 'Texas', w: 19, l: 15},
        {name: 'Texas A&M', w: 22, l: 13},
        {name: 'Texas A&M-Corpus Christi', w: 11, l: 18},
        {name: 'Texas Christian', w: 21, l: 12},
        {name: 'Texas Southern', w: 16, l: 20},
        {name: 'Texas State', w: 15, l: 18},
        {name: 'Texas Tech', w: 27, l: 10},
        {name: 'Texas-Arlington', w: 21, l: 13},
        {name: 'Texas-El Paso', w: 11, l: 20},
        {name: 'Texas-Rio Grande Valley', w: 15, l: 18},
        {name: 'Texas-San Antonio', w: 20, l: 15},
        {name: 'Toledo', w: 23, l: 11},
        {name: 'Towson', w: 18, l: 14},
        {name: 'Troy', w: 16, l: 17},
        {name: 'Tulane', w: 14, l: 17},
        {name: 'Tulsa', w: 19, l: 12},
        {name: 'UC-Davis', w: 22, l: 11},
        {name: 'UC-Irvine', w: 18, l: 17},
        {name: 'UC-Riverside', w: 9, l: 22},
        {name: 'UC-Santa Barbara', w: 23, l: 9},
        {name: 'UCLA', w: 21, l: 12},
        {name: 'University of California', w: 8, l: 24},
        {name: 'Utah', w: 23, l: 12},
        {name: 'Utah State', w: 17, l: 17},
        {name: 'Utah Valley', w: 23, l: 11},
        {name: 'Valparaiso', w: 15, l: 17},
        {name: 'Vanderbilt', w: 12, l: 20},
        {name: 'Vermont', w: 27, l: 8},
        {name: 'Villanova', w: 36, l: 4},
        {name: 'Virginia', w: 31, l: 3},
        {name: 'Virginia Commonwealth', w: 18, l: 15},
        {name: 'Virginia Tech', w: 21, l: 12},
        {name: 'VMI', w: 9, l: 21},
        {name: 'Wagner', w: 23, l: 10},
        {name: 'Wake Forest', w: 11, l: 20},
        {name: 'Washington', w: 21, l: 13},
        {name: 'Washington State', w: 12, l: 19},
        {name: 'Weber State', w: 20, l: 11},
        {name: 'West Virginia', w: 26, l: 11},
        {name: 'Western Carolina', w: 13, l: 19},
        {name: 'Western Illinois', w: 12, l: 16},
        {name: 'Western Kentucky', w: 27, l: 11},
        {name: 'Western Michigan', w: 17, l: 15},
        {name: 'Wichita State', w: 25, l: 8},
        {name: 'William & Mary', w: 19, l: 12},
        {name: 'Winthrop', w: 19, l: 12},
        {name: 'Wisconsin', w: 15, l: 18},
        {name: 'Wofford', w: 21, l: 13},
        {name: 'Wright State', w: 25, l: 10},
        {name: 'Wyoming', w: 20, l: 13},
        {name: 'Xavier', w: 29, l: 6},
        {name: 'Yale', w: 16, l: 15},
        {name: 'Youngstown State', w: 8, l: 24}
      ]
    };

    // this.handleTeamsBoxClick = this.handleTeamsBoxClick.bind(this);
  }

  componentDidMount() {
    if (this.props.location.state) {
      if (this.props.location.state.user) {
        this.setState({user: this.props.location.state.user})
      }
    }
  }


  handleTeamsBoxClick = (e) => {
    e.preventDefault();
    document.getElementById(e.target.id).classList.toggle('highlighted');
    let tempState = this.state.selectedTeams

    if (tempState[e.target.id]) {
      tempState[e.target.id].selected = !tempState[e.target.id].selected;
    } else {
      tempState[e.target.id] = {selected: true};
    }

    this.setState({selectedTeams: tempState});
    console.log(this.state.selectedTeams)
  }



  handleSelectBoxSubmit = () => {

    const actualSelectedTeams = Object.keys(this.state.selectedTeams).filter(team => {
        return this.state.selectedTeams[team].selected === true;
      });

    const activeWinsTotal = actualSelectedTeams.reduce((acc, val) => {
      return acc += this.state.teamsHard[val].w
    }, 0)

    console.log(actualSelectedTeams, activeWinsTotal)

    if (!this.state.user.name) {
      this.setState({submitFeedback: 'Not signed in!'});
    } else if (actualSelectedTeams.length !== 5) {
      this.setState({submitFeedback: 'Select five teams!'});
    } else if (activeWinsTotal > 100) {
      this.setState({submitFeedback: 'Not in my house!'});
    } else {
      fetch(`/api/teams?teamids=${actualSelectedTeams.join(',')}&userid=${this.state.user.id}`)
        .then(data => {
          fetch('/api/password?password=' + this.state.user.password)
            .then(res => res.json())
            .then(data => {
              console.log(data[0])
              if (data[0]) {
                console.log('2nd req', data[0]);
                let tempState = this.state;
                tempState.user = data[0];
                tempState.user.teams_2018 = tempState.user.teams_2018.map(teamId => teamId + 1)
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
              <span style={{fontSize:"14px"}}>{this.state.user.name ? this.state.user.name : 'Please sign in on home page before submitting teams'}</span>
            <p>
              <br></br>
              {this.state.user.teams_2018 ? 'Current teams:' : null}
              <br></br>
              <br></br>
              {this.state.user.teams_2018 ? this.state.teamsHard[this.state.user.teams_2018[0] - 1].name : null}
              <br></br>
              {this.state.user.teams_2018 ? this.state.teamsHard[this.state.user.teams_2018[1] - 1].name : null}
              <br></br>
              {this.state.user.teams_2018 ? this.state.teamsHard[this.state.user.teams_2018[2] - 1].name : null}
              <br></br>
              {this.state.user.teams_2018 ? this.state.teamsHard[this.state.user.teams_2018[3] - 1].name : null}
              <br></br>
              {this.state.user.teams_2018 ? this.state.teamsHard[this.state.user.teams_2018[4] - 1].name : null}
            </p>
          </div>
        </div>
        <div className="TeamsContainer">
          <div className="TeamsContainerHeading">
            <span>School</span>
            <span>2017-18 W-L</span>
          </div>
          <div className="TeamsContainerBody">
            {this.state.teamsHard.map((team, i) => {
              return (
                <div className="TeamSelectRow" id={i} onClick={this.handleTeamsBoxClick}>
                  <span id={i} className="MainTeamName">{team.name}</span>
                  <span id={i} className="MainTeamRecord">{team.w}-{team.l}</span>
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
                      {this.state.teamsHard[teamId].w}
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
                          return acc += this.state.teamsHard[val].w;
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