import React, { Component } from 'react';
import './Picks.css';
import Pickles from './Pickles';
import PicksTestimonials from './PicksTestimonials';
import PicksBySchool from './PicksBySchool';
import SimScore from './SimScore';

class Picks extends Component {

  constructor(props) {

    super(props);
    this.state = {
      testimonialsActive: false
    }

  }

  handleTestimonialsClick = (e) => {
    if (!this.state.testimonialsActive) {
      document.getElementById("dim").classList.add("Dim");
    } else {
      document.getElementById("dim").classList.remove("Dim");
    }
    this.setState({testimonialsActive: !this.state.testimonialsActive});
  }

  handleTestimonialsClick = (e) => {
    if (!this.state.testimonialsActive) {
      document.getElementById("dim").classList.add("Dim");
      document.getElementsByClassName("TestimonialsContainer")[0].classList.add("TestimonialsActive");
    } else {
      document.getElementById("dim").classList.remove("Dim");
      document.getElementsByClassName("TestimonialsContainer")[0].classList.remove("TestimonialsActive");
    }
    this.setState({testimonialsActive: !this.state.testimonialsActive});
  }

  handleTestimonialsHide = (e) => {
    if (this.state.testimonialsActive) {
      this.handleTestimonialsClick(e);
    }
  }

  render() {
    return (
      <div onClick={this.handleTestimonialsHide}>
        <div className="TestimonialsContainer">
          {this.state.testimonialsActive ? <PicksTestimonials /> : null}
        </div>
        <div id="dim">
          <div className="Picks">
            <div className="PicksBySchoolContainer"><PicksBySchool /></div>
            <div className="PicklesContainer"><Pickles /></div>
            <div className="SimScoreContainer"><SimScore /></div>
          </div>
        </div>
        <div className="TestimonialsToggle">
          <a onClick={this.handleTestimonialsClick}>{this.state.testimonialsActive ? 'Click to Hide Stats Page Testimonials' : 'Click to View Stats Page Testimonials'}</a>
        </div>
      </div>
    );
  }

}

export default Picks;