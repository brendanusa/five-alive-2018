import React from 'react';
import './ChatTestimonials.css';

const ChatTestimonials = () => {

  return (
    <div className="ChatTestimonials">
          <div className="ChatTestimonialsHeader">
            <h2>CHAT TESTIMONIALS</h2>
          </div>
          <div className="ChatTestimonialsContainer">
              <div className="ChatTestimonialLeft">
                <div className="ChatTestimonialQuote">
                "I was feeling chatty one afternoon, and it turned out the #5ALIVE chat was exactly what I was looking for."
                </div>
                <div className="ChatTestimonialAuthor">
                --2018 #5ALIVE Runner-up Coreen Kopper
                </div>
              </div>
              <div className="ChatTestimonialRight">
                <div className="ChatTestimonialQuote">
                "Very impressive!"
                </div>
                <div className="ChatTestimonialAuthor">
                --2014 #5ALIVE Champion Tim Falkner
                </div>
              </div>
              <div className="ChatTestimonialLeft">
                <div className="ChatTestimonialQuote">
                "I met my fiancee on the #5ALIVE chat - we've been inseparable ever since"
                </div>
                <div className="ChatTestimonialAuthor">
                --Don Jepsen
                </div>
              </div>
              <div className="ChatTestimonialRight">
                <div className="ChatTestimonialQuote">
                "The #5ALIVE chat is a great way to stay in touch with friends and family, and the best part is it's built on dynamic #5ALIVE chat technology!"
                </div>
                <div className="ChatTestimonialAuthor">
                --Seven-time NBA Scoring Champion Wilt Chamberlain
                </div>
              </div>
          </div>
        </div>
  )

}

export default ChatTestimonials;