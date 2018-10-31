import React, { Component } from 'react';

class TeamSelect extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('teamselect mounted')
  }

  render() {
    return (
      <div className="TeamSelect">
      Please log in.
      </div>
    )
  }

}

export default TeamSelect;