import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import Stats from '../components/Stats.jsx';
import aboutHero from '../assets/images/about/p1.png';
import facilityImage from '../assets/images/about/p2.png';

const values = [
  'Coach with clarity',
  'Train with purpose',
  'Respect every starting point',
  'Build consistency before complexity',
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About PulseFit"
        title="A Focused Space for Better Training"
        text="PulseFit Gym is a sample modern fitness brand built to show a production-style React front-end."
        image={aboutHero}
        alt="PulseFit gym interior"
      />

      <section className="section">
        <div className="container split-grid">
          <div>
            <SectionTitle
              eyebrow="Our Story"
              title="Built Around Consistency"
              text="This portfolio project presents a realistic gym experience with clean content, practical sections, and reusable front-end architecture."
            />
            <p className="body-copy">
              The gym concept focuses on accessible coaching, modern equipment,
              and a supportive environment where members can build repeatable
              habits. The content is sample copy for demonstration purposes.
            </p>
          </div>
          <div className="info-panel">
            <h3>Mission</h3>
            <p>Help members train with structure, confidence, and long-term focus.</p>
            <h3>Vision</h3>
            <p>Create a premium fitness experience that feels motivating without being overwhelming.</p>
          </div>
        </div>
      </section>

      <Stats />

      <section className="section about-section">
        <div className="container split-grid">
          <div className="facility-frame">
            <img src={facilityImage} alt="Gym facility with modern equipment" />
          </div>
          <div>
            <SectionTitle
              eyebrow="Values"
              title="Why Members Trust Us"
              text="A clear, practical approach makes training easier to start and easier to repeat."
            />
            <div className="values-list">
              {values.map((value) => (
                <article key={value}>
                  <span aria-hidden="true">+</span>
                  <p>{value}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
