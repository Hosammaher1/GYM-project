import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle.jsx';
import TrainerCard from '../components/TrainerCard.jsx';
import { trainers } from '../data/trainers.js';

function FeaturedTrainers() {
  return (
    <section className="section trainers-section">
      <div className="container">
        <SectionTitle
          eyebrow="Featured Trainers"
          title="Coaches Who Keep Training Clear"
          text="Meet a focused team covering strength, conditioning, mobility, and personal coaching."
        />
        <div className="trainers-grid">
          {trainers.slice(0, 3).map((trainer) => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </div>
        <div className="section-action">
          <Link className="btn btn-outline" to="/trainers">
            Meet All Trainers
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedTrainers;
