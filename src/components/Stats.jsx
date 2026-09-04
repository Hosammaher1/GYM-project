import React from 'react';
import StatCard from './StatCard.jsx';
import { stats } from '../data/stats.js';

function Stats() {
  return (
    <section className="stats-section" aria-label="Gym statistics">
      <div className="container stats-grid">
        {stats.map((stat) => (
          <StatCard key={stat.id} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
}

export default Stats;
