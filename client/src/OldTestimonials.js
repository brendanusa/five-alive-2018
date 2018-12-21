import React from 'react';
import './OldTestimonials.css';

const OldTestimonials = () => {

  return (
    <div className="Testimonials">
      <div>
        <h2>TESTIMONIALS</h2>
      </div>
      <div className="TestimonialsContainer">
        <div className="T1">
          <div className="TestimonialLeft">
            <div className="TestimonialQuote">
            "Initially I asked my wife Coreen to pick my teams for me, but since seeing the #5ALIVE website, I've spent five straight days in my basketball lab working with analysts and scientists to create spreadsheets, charts, and predictive aqueous solutions."
            </div>
            <div className="TestimonialAuthor">
            --Avi Ringer
            </div>
          </div>
          <div className="TestimonialRight">
            <div className="TestimonialQuote">
            "Very impressive!"
            </div>
            <div className="TestimonialAuthor">
            --2014 #5ALIVE Champion Tim Falkner
            </div>
          </div>
        </div>
        <div className="T2">
          <div className="TestimonialLeft">
            <div className="TestimonialQuote">
            "#5ALIVE has always been a fun, exciting basketball competition, but the user-friendly and visually stunning #5ALIVE website has taken it to a whole new level"
            </div>
            <div className="TestimonialAuthor">
            --NBA Hall of Famer Wilt Chamberlain
            </div>
          </div>
          <div className="TestimonialRight">
            <div className="TestimonialQuote">
            "I submitted picks"
            </div>
            <div className="TestimonialAuthor">
            --Patrick Godfrey
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default OldTestimonials;