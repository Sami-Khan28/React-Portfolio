import React, { useContext } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';
import './Navbar.css';

const GlassNavbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar expand="lg" className="glass-navbar fixed-top">
      <Container>
        <Navbar.Brand href="#home" className="nav-brand">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Button
              variant={darkMode ? 'outline-light' : 'outline-dark'}
              size="sm"
              className="ms-3"
              onClick={toggleTheme}
            >
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default GlassNavbar;
