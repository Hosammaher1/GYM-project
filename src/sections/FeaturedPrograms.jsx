import React from 'react';
import { Link } from 'react-router-dom';
import ProgramCard from '../components/ProgramCard.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import { programs } from '../data/programs.js';

function FeaturedPrograms() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Featured Programs"
          title="Training Built for Real Progress"
          text="Start with our most popular programs, then explore the full training schedule."
        />
        <div className="services-grid">
          {programs.slice(0, 3).map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
        <div className="section-action">
          <Link className="btn btn-outline" to="/programs">
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedPrograms;
