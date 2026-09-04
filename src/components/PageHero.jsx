import React from 'react';

function PageHero({ eyebrow, title, text, image, alt }) {
  return (
    <section className="page-hero">
      {image && <img src={image} alt={alt} />}
      <div className="page-hero-overlay" />
      <div className="container page-hero-content">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}

export default PageHero;
