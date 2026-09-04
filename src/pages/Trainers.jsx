import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import TrainerCard from '../components/TrainerCard.jsx';
import { trainers } from '../data/trainers.js';
import heroImage from '../assets/images/trainer/p5.png';

function Trainers() {
  return (
    <>
      <PageHero
        eyebrow="Trainers"
        title="Meet the Coaching Team"
        text="Expert trainers for strength, conditioning, mobility, nutrition, and personal progress."
        image={heroImage}
        alt="Professional gym trainer"
      />
      <section className="section trainers-section">
        <div className="container">
          <SectionTitle
            eyebrow="Our Coaches"
            title="Guidance Without the Guesswork"
            text="Each trainer brings a practical specialty and a clear coaching style."
          />
          <div className="trainers-grid trainers-page-grid">
            {trainers.map((trainer) => (
              <TrainerCard key={trainer.id} trainer={trainer} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Trainers;
