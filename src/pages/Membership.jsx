import React from 'react';
import PageHero from '../components/PageHero.jsx';
import PricingCard from '../components/PricingCard.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import { pricingPlans } from '../data/pricing.js';
import heroImage from '../assets/images/membership/p1.png';

function Membership() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Choose Your Training Plan"
        text="Simple pricing options for flexible gym access, group training, and personal support."
        image={heroImage}
        alt="Gym membership training area"
      />
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Pricing"
            title="Membership That Fits"
            text="Prices are placeholders for this portfolio project and can be adjusted for a real gym brand."
          />
          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Membership;
