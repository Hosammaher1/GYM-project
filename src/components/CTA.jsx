import React from 'react';
import { Link } from 'react-router-dom';
import ctaImage from '../assets/images/home/P1_6.png';

function CTA() {
  return (
    <section className="join-section" id="join">
      <img src={ctaImage} alt="Gym member preparing for a workout" />
      <div className="join-overlay" />
      <div className="join-content container">
        <h2>No More Waiting. Start Today.</h2>
        <p>
          Take the first step toward a stronger routine with coaching, programs,
          and momentum built around you.
        </p>
        <Link className="btn" to="/contact">
          Join Now
        </Link>
      </div>
    </section>
  );
}

export default CTA;
