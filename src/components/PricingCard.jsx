import React from 'react';
import { Link } from 'react-router-dom';

function PricingCard({ plan }) {
  return (
    <article className={`pricing-card ${plan.recommended ? 'is-featured' : ''}`}>
      {plan.recommended && <span className="pricing-badge">Recommended</span>}
      <h3>{plan.name}</h3>
      <p>{plan.description}</p>
      <div className="price">
        <strong>{plan.price}</strong>
        <span>{plan.period}</span>
      </div>
      <ul>
        {plan.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <Link className="btn" to="/contact">
        Choose Plan
      </Link>
    </article>
  );
}

export default PricingCard;
