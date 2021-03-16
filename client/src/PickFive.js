import React, { Component } from 'react';
import './PickFive.css';
import PickFiveStandings from './PickFiveStandings';
import PickFiveChamps from './PickFiveChamps';
import PickFiveHighScores from './PickFiveHighScores';
import Slider from 'react-slick';
import "./slick/slick.css";
import "./slick/slick-theme.css";

class PickFive extends Component {

  constructor(props) {

    super(props);
    this.state = {
      // testimonialsActive: false
    }

  }

  render() {
    var settings = {
      centerMode: true,
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      initialSlide: 0,
      // centerPadding: '100px'
    };
    return (
      <div>
        <div id="dim">
          <div className="PickFiveDescription">
          Welcome to the PICK 5, #5ALIVE'S tournament-only cousin. Gaze in awe at the the all-time high scores, or take an inspiring stroll down the Hall of Champions. (click header to expand/collapse)
          </div>
          <div className="PickFive" style={{height:'100%'}}>
              <div><PickFiveStandings /></div>
              <div><PickFiveChamps /></div>
              <div><PickFiveHighScores /></div>
          </div>
        </div>
      </div>
    );
  }

}

export default PickFive;