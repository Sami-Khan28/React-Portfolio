import React from 'react';
import GlassNavbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import SkillsChart from './components/SkillsChart';
import './App.css';

function App() {
  return (
    <>
      <GlassNavbar />
      <AnimatedBackground />
       
      <section id="home"><Header /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      {/* <SkillsChart /> */}
      <section id="contact"><Contact /></section>
      <Footer />
    </>
  );
}
export default App;
