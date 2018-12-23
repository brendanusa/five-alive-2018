import React from 'react';
import './Testimonials.css';

const ChatTestimonials = () => {

  return (
    <div>
      <div className="TestimonialsHeader">
        <h2>CHAT TESTIMONIALS</h2>
      </div>
      <div className="TestimonialsBody">
        <div className="TestimonialLeft">
          <div className="TestimonialQuote">
          "I was feeling chatty one afternoon, and it turned out the #5ALIVE chat was exactly what I was looking for."
          </div>
          <div className="TestimonialAuthor">
          --2018 #5ALIVE Runner-up Coreen Kopper
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
        <div className="TestimonialLeft">
          <div className="TestimonialQuote">
          "I met my fiancee on the #5ALIVE chat - we've been inseparable ever since"
          </div>
          <div className="TestimonialAuthor">
          --Don Jepsen
          </div>
        </div>
        <div className="TestimonialRight">
          <div className="TestimonialQuote">
          "The #5ALIVE chat is a great way to stay in touch with friends and family, and the best part is it's built on dynamic #5ALIVE chat technology!"
          </div>
          <div className="TestimonialAuthor">
          --Seven-time NBA Scoring Champion Wilt Chamberlain
          </div>
        </div>
      </div>
    </div>
  )

}

export default ChatTestimonials;