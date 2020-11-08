import React from 'react';
import Section from '../Section';
import './About.css';

function About() {
  return (
    <div style={{ display: "none" }}>
      <Section target="about-section">
        <div className="container">
          <div className="about-message">
            <div className="about-quote">
              <i className="fas fa-quote-left"></i>
              <div className="about-message-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolor officiis molestias quas consequuntur, obcaecati dolore
                ducimus placeat voluptatum provident totam magni ipsum itaque
                ratione nihil aliquam nostrum beatae temporibus aliquid neque
                aperiam labore quasi nobis ipsam. Totam tenetur, officia error
                maxime numquam iste necessitatibus, harum inventore tempora
                nam suscipit eius dolorem.
          </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default About; 