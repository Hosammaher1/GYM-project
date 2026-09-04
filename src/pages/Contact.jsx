import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import heroImage from '../assets/images/membership/p2.png';

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start the Conversation"
        text="Ask about programs, membership plans, or a first trainer consultation."
        image={heroImage}
        alt="Gym reception and training area"
      />
      <section className="section">
        <div className="container contact-grid">
          <div>
            <SectionTitle
              eyebrow="Visit Us"
              title="Contact Information"
              text="These details are placeholders for the front-end demo."
            />
            <div className="contact-list">
              <article>
                <h3>Address</h3>
                <p>123 Fitness Street, Training District</p>
              </article>
              <article>
                <h3>Phone</h3>
                <a href="tel:+1234567890">+1 234 567 890</a>
              </article>
              <article>
                <h3>Email</h3>
                <a href="mailto:hello@pulsefit.com">hello@pulsefit.com</a>
              </article>
              <article>
                <h3>Opening Hours</h3>
                <p>Mon-Fri: 6:00 AM - 10:00 PM</p>
                <p>Sat-Sun: 8:00 AM - 8:00 PM</p>
              </article>
              <article>
                <h3>Social</h3>
                <p>Facebook / Instagram / Twitter</p>
              </article>
            </div>
          </div>

          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>
            <label>
              Phone
              <input type="tel" name="phone" placeholder="+1 234 567 890" />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" placeholder="Tell us about your goal" required />
            </label>
            <button className="btn" type="submit">
              Submit Message
            </button>
            <p>This demo form validates fields in the browser and does not send data.</p>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
