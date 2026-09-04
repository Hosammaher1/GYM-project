import React from 'react';
import { Link } from 'react-router-dom';

function ProgramCard({ program }) {
  return (
    <article className="program-card">
      <div className="card-image-wrap">
        <img src={program.image} alt={program.alt} />
      </div>
      <div className="program-card-content">
        <p className="card-kicker">{program.category}</p>
        <h3>{program.name}</h3>
        <p>{program.description}</p>
        <div className="program-meta">
          <span>{program.level}</span>
          <span>{program.duration}</span>
        </div>
        <Link className="text-link" to="/membership">
          Join Program <span aria-hidden="true">-&gt;</span>
        </Link>
      </div>
    </article>
  );
}

export default ProgramCard;
