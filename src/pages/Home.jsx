import React from 'react';
import CTA from '../components/CTA.jsx';
import FeaturedPrograms from '../sections/FeaturedPrograms.jsx';
import FeaturedTrainers from '../sections/FeaturedTrainers.jsx';
import Hero from '../sections/Hero.jsx';
import MembershipPreview from '../sections/MembershipPreview.jsx';
import Stats from '../sections/Stats.jsx';
import Testimonials from '../sections/Testimonials.jsx';
import WhyChooseUs from '../sections/WhyChooseUs.jsx';

function Home() {
  return (
    <>
      <Hero />
      <FeaturedPrograms />
      <Stats />
      <WhyChooseUs />
      <FeaturedTrainers />
      <MembershipPreview />
      <Testimonials />
      <CTA />
    </>
  );
}

export default Home;
