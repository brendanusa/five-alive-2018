import React from 'react';
import './Info.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Info = () => {

  return (
    <div className="InfoContainer">
      <div className="Info">
        <h2>HISTORY</h2>
        <p>The first #5ALIVE was conducted by Ryan Corbalis back in 1879 in his small village in Connecticut. All records that year were kept on elk hides and then burned ceremonially at the end of the season, a tradition that we continue today.</p>
          <Link to={'/pastchamps'}>Click to see our past winners</Link>
          <br></br>
        <br></br>
        <h2>RULES</h2>
        <p>The rules are simple, and pleasing to the eye - participants select five teams that collectively won no more than 100 games the previous season. The person whose teams win the most games this year (excluding non-NCAA postseason tournaments - i.e. NIT, CIT, etc.) wins the grand prize: a Fast & The Furious DVD box set and a 6-pack of Doritos-flavored Mountain Dew.</p>
        <br></br>
        <h2>2018-19</h2>
        <p>This season promises to be our most exciting yet, with the following #5ALIVE legends sitting on the Rules and Excitement Committee:
            <br></br>
            <br></br>
            <li>Chris Godfrey</li>
            <li>Patrick Godfrey</li>
            <li>Ryan Corbalis</li>
            <li>Dillon Smith</li>
            <li>Justin McNamee</li>
            <li>Michael Jordan</li>
            <li>Patrick Godfrey</li>
            <li>JP Kelly</li>
            <li>Dan Vogel</li>
            <li>Wilt Chamberlain</li>
            <li>Patrick Godfrey</li>
        </p>
      </div>
    </div>
  )

}

export default Info;