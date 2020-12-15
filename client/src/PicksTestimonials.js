import React from 'react';
import './Testimonials.css';

const PicksTestimonials = () => {

  return (

    <div>
      <div className="TestimonialsHeader">
        <h2>STATS PAGE TESTIMONIALS</h2>
      </div>
      <div className="TestimonialsBody">
        <div className="TestimonialLeft">
          <div className="TestimonialQuote">
          "I was looking for info on everyone's picks one evening, and the #5ALIVE Stats page had everything I wanted and more."
          </div>
          <div className="TestimonialAuthor">
          --Two-time #5ALIVE Runner-up Coreen Kopper
          </div>
        </div>
        <div className="TestimonialRight">
          <div className="TestimonialQuote">
          "[mind blown emoji]"
          </div>
          <div className="TestimonialAuthor">
          --#5ALIVE Excitement Expert Patrick Godfrey
          </div>
        </div>
        <div className="TestimonialLeft">
          <div className="TestimonialQuote">
          "I met my mistress on the #5ALIVE Picks page - we've been sneaking around and committing lots of adultery ever since"
          </div>
          <div className="TestimonialAuthor">
          --Stan Johnson
          </div>
        </div>
        <div className="TestimonialRight">
          <div className="TestimonialQuote">
          "The #5ALIVE analytics and research team has aboslutely outdone themselves this time with the all-new Stats page. It has a list of everyone's teams, plus two other lists for added lists. God bless you, #5ALIVE!"
          </div>
          <div className="TestimonialAuthor">
          --Four-time NBA MVP Wilt Chamberlain
          </div>
        </div>
      </div>
    </div>
  )

}

export default PicksTestimonials;