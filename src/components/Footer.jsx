import React from 'react';
import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Programs', to: '/programs' },
  { label: 'Trainers', to: '/trainers' },
  { label: 'About', to: '/about' },
  { label: 'Membership', to: '/membership' },
  { label: 'Contact', to: '/contact' },
];

const programLinks = [
  { label: 'Strength Training', to: '/programs' },
  { label: 'Cardio', to: '/programs' },
  { label: 'Personal Training', to: '/programs' },
];

const socialLinks = ['Facebook', 'Instagram', 'Twitter'];

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-grid">
        <div>
          <Link className="brand footer-brand" to="/">
            <span className="brand-mark">P</span>
            <span>PulseFit Gym</span>
          </Link>
          <p>Train hard. Move well. Stay consistent.</p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <ul>
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Programs</h3>
          <ul>
            {programLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <address>
          <h3>Contact</h3>
          <p>123 Fitness Street</p>
          <a href="mailto:hello@pulsefit.com">hello@pulsefit.com</a>
          <a href="tel:+1234567890">+1 234 567 890</a>
        </address>

        <div>
          <h3>Social</h3>
          <div className="social-list">
            {socialLinks.map((social) => (
              <a href="/" key={social} aria-label={`${social} placeholder`}>
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; 2026 PulseFit Gym. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
