import React from 'react';
import { useState } from 'react';
import PageHero from '../components/PageHero.jsx';
import ProgramCard from '../components/ProgramCard.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import { programs } from '../data/programs.js';
import heroImage from '../assets/images/classes/p7.png';

const categories = ['All', ...new Set(programs.map((program) => program.category))];

function Programs() {
  const [activeCategory, setActiveCategory] = useState('All');

  const visiblePrograms =
    activeCategory === 'All'
      ? programs
      : programs.filter((program) => program.category === activeCategory);

  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Training for Every Goal"
        text="Explore structured gym programs for strength, conditioning, recovery, and personal coaching."
        image={heroImage}
        alt="Gym class area with athletes training"
      />

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Program Categories"
            title="Find Your Focus"
            text="Filter by category or browse the complete program list."
          />
          <div className="filter-list" aria-label="Program category filters">
            {categories.map((category) => (
              <button
                className={category === activeCategory ? 'is-active' : ''}
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="services-grid programs-page-grid">
            {visiblePrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Programs;
