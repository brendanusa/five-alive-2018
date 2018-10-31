import React, { Component } from 'react';
import Standing from './Standing';
import './Standings.css'

class Standings extends Component {

  constructor(props) {
    super(props);
    this.state = {standingsHard: {'Chris Clark': 129,
    'Coreen Kopper': 128,
    'Patrick Grove': 124,
    'Kevin Meuse': 124,
    'Brendon Desrochers': 123,
    'Gil Estupinan': 123,
    'Timothy Falkner': 123,
    'French/Reiman': 122,
    'Scott Sherman': 122,
    'Matt Gordon': 122,
    'Mike Agresti':  121,
    'Brendan Bansavage': 121,
    'Kyle Harris': 120,
    'Ron Haraka':  119,
    'Adam Sidney': 118,
    'Troy Davis':  117,
    'Andrew Soltish': 117,
    'Brayton Wike': 117,
    'Joe Franza': 116,
    'Calvin Groves': 114,
    'Erin McDermott': 114,
    'Jay Kelly': 114,
    'Michael Leboff': 113,
    'Johnny Vohra': 113,
    'Ryan Corbalis': 109,
    'Rob Coloney': 109,
    'Alex Raup': 108,
    'Lucille Kelly': 100,
    'Dan Vogel': 91,
    'Chris Godfrey': 77,
    'Amol Vohra': 75}};
  }


  componentDidMount() {
    console.log('standings mounted')
    console.log(Object.keys(this.state.standingsHard))
  }

  render() {
    return (
      <div className="Standings">
        {Object.keys(this.state.standingsHard).map((person, i) => {
          return (<Standing key={i} name={person} wins={this.state.standingsHard[person]}/>)
        })}
        <div id="bkgd"/>
        <div id="comment">These are from last year</div>
      </div>
    );
  }

}

export default Standings;