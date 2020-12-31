import React from 'react';
import Heading from '../Heading';
import Section from '../Section';

import "./Contact.css";

function Contact() {
  return (
    <Section target="contact-section">
      <div className="container">
        <Heading title="Contact Me" subtitle="Feel free to reach out to me if you have any questions. I would be happy to talk." />
        <div className="contact">
          <div className="contact-item">
            <div className="contact-key">Phone</div>
            <div className="contact-value">152-1527-5904</div>
          </div>
          <div className="contact-item">
            <div className="contact-key">Email</div>
            <div className="contact-value">
              <a href="mailto:rosspfindlay@gmail.com" target="_blanl">rosspfindlay@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Contact;
