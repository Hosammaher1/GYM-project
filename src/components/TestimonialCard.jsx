import React from 'react';

function TestimonialCard({ testimonial }) {
  return (
    <article className="testimonial-card">
      <p>"{testimonial.quote}"</p>
      <div>
        <strong>{testimonial.name}</strong>
        <span>{testimonial.role}</span>
      </div>
    </article>
  );
}

export default TestimonialCard;
