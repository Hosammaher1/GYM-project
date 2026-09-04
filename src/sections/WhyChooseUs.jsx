import React from 'react';
import SectionTitle from '../components/SectionTitle.jsx';
import aboutImage from '../assets/images/home/P1_2.png';

const benefits = [
  'Expert Trainers',
  'Modern Equipment',
  'Flexible Membership',
  'Supportive Community',
];

function WhyChooseUs() {
  return (
    <section className="section about-section">
      <div className="container about-grid">
        <div>
          <SectionTitle
            eyebrow="Why Choose Us"
            title="More Than a Place to Train"
            text="PulseFit combines coaching, structure, and a focused environment so your routine becomes easier to keep."
          />
          <div className="benefits-grid">
            {benefits.map((benefit) => (
              <div className="benefit-item" key={benefit}>
                <span aria-hidden="true">+</span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="about-image-frame">
          <img src={aboutImage} alt="Modern gym training area with strength equipment" />
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
