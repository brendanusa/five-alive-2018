import React from 'react';
import './Testimonials.css';

const PicksTestimonials = () => {

  console.log('HELLO')

  return (

    <div>
      <div className="TestimonialsHeader">
        <h2>PICKS PAGE TESTIMONIALS</h2>
      </div>
      <div className="TestimonialsBody">
        <div className="TestimonialLeft">
          <div className="TestimonialQuote">
          "I was looking for info on everyone's picks one evening, and the #5ALIVE Picks page had everything I wanted and more."
          </div>
          <div className="TestimonialAuthor">
          --2018 #5ALIVE Runner-up Coreen Kopper
          </div>
        </div>
        <div className="TestimonialRight">
          <div className="TestimonialQuote">
          "[mind blown emoji]"
          </div>
          <div className="TestimonialAuthor">
          --2018-19 #5ALIVE Participant Patrick Godfrey
          </div>
        </div>
        <div className="TestimonialLeft">
          <div className="TestimonialQuote">
          "I met my mistress on the #5ALIVE Picks page - we've been sneaking around and committing lots of adultery ever since"
          </div>
          <div className="TestimonialAuthor">
          --Steve Johnson
          </div>
        </div>
        <div className="TestimonialRight">
          <div className="TestimonialQuote">
          "The #5ALIVE analytics and research team has aboslutely outdone themselves this time with the 2018 Picks page. It has a list of everyone's teams, plus two other lists for added lists. God bless you, #5ALIVE!"
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