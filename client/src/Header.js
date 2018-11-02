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
    <span className="link">
        <span>
          <Link to={'/login'}>HOME</Link>
        </span>
        <span>
          <Link to={'/info'}>INFO</Link>
        </span>
        <span>
          <Link to={'/standings'}>STANDINGS</Link>
        </span>
    </span>
  </header>
)

export default Header;