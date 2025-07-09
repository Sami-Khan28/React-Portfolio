import React, { useState } from 'react';
import './Projects.css';
import { Modal, Button } from 'react-bootstrap';

const projectData = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built using React and Bootstrap.',
    details:
      'This responsive site features animations, dynamic components, a resume download, theme toggle, and a contact form.',
    link: 'https://sami-portfoli0.netlify.app/',
    tech: ['React', 'Bootstrap', 'CSS'],
  },
  {
    title: 'Netflix-Clone',
    description:
      'A React app using TMDB API to mimic Netflix functionality and layout.',
    details:
      'Includes movie sliders, categories, and detail pages. Fetches real-time movie data using Axios.',
    link: 'https://clonenetflyx.netlify.app/',
    tech: ['React', 'Axios', 'TMDB API'],
  },
  {
    title: 'Quiz-Application',
    description:
      'A JavaScript quiz app with login, question logic, score tracking and dashboard.',
    details:
      'Random questions from a set. Stores and displays scores. Pure HTML, CSS, JS implementation.',
    link: 'https://sami-khan28.github.io/Quiz-Application/',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'ROCK-PAPER-SCISSOR',
    description: 'Simple rock paper scissors game with fun UI.',
    details:
      'Score counter, animations, and result logic. Built using just HTML, CSS, JS.',
    link: 'https://lively-florentine-74fdd1.netlify.app/',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="container py-5">
      <h2 className="text-center mb-5 glass-text">Projects</h2>
      <div className="row justify-content-center">
        {projectData.map((project, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <div className="glass-card p-4 h-100 d-flex flex-column justify-content-between">
              <div>
                <h4 className="glass-title">{project.title}</h4>
                <p>{project.description}</p>
              </div>
              <Button
                variant="outline-success"
                className="mt-3"
                onClick={() => setSelected(project)}
              >
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal show={!!selected} onHide={() => setSelected(null)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selected?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{selected?.details}</p>
          {/* <strong>Tech Used:</strong> */}
          <h6 className="mt-4">Tech Used:</h6>
<div className="d-flex flex-wrap gap-3 align-items-center">
  <span className="tech-icon" title="React"><i className="fab fa-react"></i></span>
  <span className="tech-icon" title="Bootstrap"><i className="fab fa-bootstrap"></i></span>
  <span className="tech-icon" title="JavaScript"><i className="fab fa-js"></i></span>
</div>

          <ul>
            {selected?.tech.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            href={selected?.link}
            target="_blank"
            rel="noreferrer"
          >
            View Live Project
          </Button>
          <Button variant="secondary" onClick={() => setSelected(null)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Projects;
