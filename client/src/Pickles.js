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
        this.setState({pickles: data.sort((a, b) => {
          if (b.name > a.name) return -1
          if (a.name > b.name) return 1
        })})
      })
  }

  render() {
    return (
    <div className="PicklesContainer">
      <h3>PICKS</h3>
      <div className="Pickles">
        <div>
          {this.state.pickles ? this.state.pickles.map((user, i) => {
            return (
              <PickNew key={i} name={user.name} teams={user.teams_2018}/>
            )
          }) : null}
        </div>
      </div>
    </div>
    );
  }

}

export default Pickles;