import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/home/P1_1.png';

function Hero() {
  return (
    <section className="hero section">
      <img
        className="hero-image"
        src={heroImage}
        alt="Athlete training in a modern fitness gym"
      />
      <div className="hero-overlay" />
      <div className="hero-content container">
        <p className="eyebrow">Modern Fitness Studio</p>
        <h1>
          Build Your
          <span> Strongest </span>
          Version
        </h1>
        <p className="hero-text">
          Train with expert coaches, focused programs, and a community that keeps
          you moving forward.
        </p>
        <div className="hero-actions">
          <Link className="btn" to="/membership">
            Join Now
          </Link>
          <Link className="btn btn-outline" to="/programs">
            Explore Programs
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
