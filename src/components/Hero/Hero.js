import React from 'react'


import './Hero.css';

export default function Hero() {

  // host on https://vercel.com 
  return (
    <section className="hero__section">
      <div className="container">
        <div className="hero__layout">
          <div className="hero__content">
            <div className="hero__content--title">
              <h1>Hello. I'm Ross. I am a <span className="hero__alt--text">Webmaster</span> and <span className="hero__alt--text">Frontend Deverloper</span></h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
