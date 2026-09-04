import React from 'react';
import { Link } from 'react-router-dom';
import PricingCard from '../components/PricingCard.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import { pricingPlans } from '../data/pricing.js';

function MembershipPreview() {
  return (
    <section className="section membership-preview">
      <div className="container">
        <SectionTitle
          eyebrow="Membership"
          title="Plans That Match Your Routine"
          text="Choose simple access, guided training, or premium coaching support."
        />
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
        <div className="section-action">
          <Link className="btn btn-outline" to="/membership">
            Compare Plans
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MembershipPreview;
