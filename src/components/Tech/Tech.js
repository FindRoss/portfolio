import React from 'react';
import './Tech.css';
import { techData } from './data';
import Section from '../Section';
import Heading from '../Heading';

function Tech() {

  return (
    <Section target="tech-section">
      <div className="container">
        <Heading title="Technology" subtitle="Here are just a few the technongies I enjoy using and aim to continally improve at." />
        <ul className="techs">
          {techData.map((t, i) => {
            return (
              <li key={i} className="tech">
                <div className="tech-card">
                  <span className="tech-card__icon">
                    <i className={t.awesome}></i>
                  </span>
                  <h4>{t.name}</h4>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  )
}

export default Tech;
