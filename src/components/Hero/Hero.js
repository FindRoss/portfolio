import React from 'react'


import './Hero.css';
import coding from '../../images/coding.jpg';

export default function Hero() {

  // host on https://vercel.com 
  return (
    <section className="hero__section">
      <div className="container">
        <div className="hero__layout">
          <div className="hero__content">
            <div className="hero__content--title">
              <h1>Hi,</h1>
              <h1>I'm Ross.</h1><h1>I am a <span className="hero__alt--text">Frontend Deverloper</span></h1>
            </div>
          </div>{/* Hero Layout */}
          <div className="hero__media">
            <img src={coding} alt="profile" />
          </div>
        </div>
      </div>
    </section >
  )
}
