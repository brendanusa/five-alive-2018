import React, { Component } from 'react';

class Standings extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('standings mounted')
  }

  render() {
    return (
      <div className="Standings">
      The season hasn't started yet stupid!
      </div>
    )
  }

}

export default Standings;