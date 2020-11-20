import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Header.css';
        
// SELECT TEAMS LINK
// <span>
//   <Link to={'/teamselect'} style={{marginRight:"40px"}}>SELECT TEAMS</Link>
// </span>

const Header = () => (
  <header>
    <span className="title"><strong>
      <span className="bordered" id="one">#</span>
      <span className="bordered" id="two">5</span>
      <span className="bordered" id="three">A</span>
      <span className="bordered" id="four">L</span>
      <span className="bordered" id="five">I</span>
      <span className="bordered" id="six">V</span>
      <span className="bordered" id="seven">E</span>
    </strong></span>
    <span className="links">
        <span>
          <Link to={'/home'}>HOME</Link>
        </span>
        <span>
          <Link to={'/teamselect'}>STATS</Link>
        </span>
        <span>
          <Link to={'/about'}>ABOUT</Link>
        </span>
        <span style={{marginLeft: '1.5vw'}}>
          <Link to={'/pickfive'}>PICK-5</Link>
        </span>
    </span>
  </header>
)

export default Header;