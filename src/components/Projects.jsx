import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="container py-5">
      <h2 className="text-center mb-5 glass-text">Projects</h2>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="glass-card p-4">
            <h4 className="glass-title">Portfolio Website</h4>
            <p>A personal portfolio built using React, Bootstrap.</p>
            <a
              href="https://sami-portfoli0.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="glass-button"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="glass-card p-4">
            <h4 className="glass-title">Netflix-Clone</h4>
            <p>I had build this project with react and for fetching the data i had used TMDB API.</p>
            <a
              href="https://clonenetflyx.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="glass-button"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="glass-card p-4">
            <h4 className="glass-title">Quiz-Application</h4>
            <p>I had build thid project with basic HTML,CSS &
               JAVASCRIPT,it includes sign-up and login page 
               and displays 10 random questions and storing
                the score and displays on the Dashboard.</p>
            <a
              href="https://sami-khan28.github.io/Quiz-Application/"
              target="_blank"
              rel="noreferrer"
              className="glass-button"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="glass-card p-4">
            <h4 className="glass-title">ROCK-PAPER-SCISSOR</h4>
            <p>I had build this game with simple html css JAVASCRIPT.</p>
            <a
              href="https://lively-florentine-74fdd1.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="glass-button"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
