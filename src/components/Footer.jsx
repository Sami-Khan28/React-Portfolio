import React from 'react';
import './Footer.css';
import { Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer glass-footer mt-auto py-3">
      <Container className="text-center text-light">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Sami Khan. All rights reserved.</p>
          <div className="footer-icons">
            <a href="https://github.com/Sami-Khan28" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/Sami Khan" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:samikhan28972@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
