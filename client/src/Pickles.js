import React, { Component } from 'react';
import PickNew from './PickNew';
import './Pickles.css'

class Pickles extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pickles: []
    }
  }

  componentDidMount() {
    fetch('/api/standings')
      .then(res => res.json())
      .then(data => {
        console.log(data[0])
        this.setState({pickles: data.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        })})
      })
  }

  render() {
    return (
    <div>
      <h3>PICKS</h3>
      <div className="Pickles">
        <div>
          {this.state.pickles ? this.state.pickles.map((user, i) => {
            return (
              <PickNew key={i} name={user.name} teams={user.teams_2020}/>
            )
          }) : null}
        </div>
      </div>
    </div>
    );
  }

}

export default Pickles;