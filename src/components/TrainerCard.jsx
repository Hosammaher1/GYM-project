import React from 'react';
import { Link } from 'react-router-dom';

function TrainerCard({ trainer }) {
  return (
    <article className="trainer-card">
      <img src={trainer.image} alt={trainer.alt} />
      <div className="trainer-info">
        <h3>{trainer.name}</h3>
        <p>{trainer.specialty}</p>
        {trainer.experience && <span>{trainer.experience} Experience</span>}
        {trainer.bio && <small>{trainer.bio}</small>}
        <div className="trainer-socials">
          <Link to="/contact" aria-label={`${trainer.name} Instagram placeholder`}>
            Instagram
          </Link>
          <Link to="/contact" aria-label={`${trainer.name} LinkedIn placeholder`}>
            LinkedIn
          </Link>
        </div>
      </div>
    </article>
  );
}

export default TrainerCard;
