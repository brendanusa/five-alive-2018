import React from "react";
import "./About.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

const About = () => {
  return (
    <div className="AboutContainer">
      <div className="About">
        <h2>HISTORY</h2>
        <p>
          The first #5ALIVE was conducted by Ryan Corbalis back in 1879 in his
          small village in Connecticut. All records that year were kept on elk
          hides and then burned ceremonially at the end of the season, a
          tradition that we continue today.
        </p>
        <Link to={"/pastchamps"}>Take a look at our past winners</Link>
        <br></br>
        <br></br>
        <h2>RULES</h2>
        <p>
          The rules are simple, and pleasing to the eye - participants select
          five teams that collectively won no more than 100 games the previous
          season. The person whose teams win the most games this year (excluding
          non-NCAA postseason tournaments - i.e. NIT, CIT, etc.) wins the grand
          prize: a drawing of a basketball and Brendan's special family recipe
          for water.
          <br></br>
          <p style={{ color: "yellow" }}>
            For more information or college/professional recommendations, please
            contact Brendan Bansavage.
          </p>
        </p>
        <br></br>
        <h2>EXCITEMENT INFO</h2>
        <p>
          This season promises to be our most recent season yet, with the
          following #5ALIVE legends sitting on the Recency and Sports
          Performance Committee:
          <br></br>
          <br></br>
          <li>Chris Godfrey</li>
          <li>Patrick Godfrey</li>
          <li>Ryan Excitement</li>
          <li>Action Vogel</li>
          <li>John Kelly</li>
          <li>Wilt Chamberlain</li>
          <li>Michael Jorban</li>
        </p>
      </div>
    </div>
  );
};

export default About;
