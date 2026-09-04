import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="section not-found">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link className="btn" to="/">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
