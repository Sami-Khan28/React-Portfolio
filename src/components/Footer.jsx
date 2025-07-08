import React from 'react';
import './Footer.css';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer glass-footer mt-auto py-3">
      <Container className="text-center text-light">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Sami Khan . All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/Sami-Khan28" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/Sami Khan" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:samikhan28972@gmail.com">Email</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
