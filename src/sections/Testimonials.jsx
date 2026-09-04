import React from 'react';
import SectionTitle from '../components/SectionTitle.jsx';
import TestimonialCard from '../components/TestimonialCard.jsx';
import { testimonials } from '../data/testimonials.js';

function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <SectionTitle
          eyebrow="Testimonials"
          title="What Members Say"
          text="Sample member feedback showing the kind of supportive experience PulseFit is designed to provide."
        />
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
