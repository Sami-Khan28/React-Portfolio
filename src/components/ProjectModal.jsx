// src/components/ProjectModal.jsx
import React from 'react';
import { Modal, Button, Badge } from 'react-bootstrap';

const ProjectModal = ({ show, onHide, project }) => {
  if (!project) return null;

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={project.image}
          alt={project.title}
          className="img-fluid rounded mb-3"
        />
        <p>{project.description}</p>
        <h6>Tech Stack:</h6>
        <div>
          {project.tech.map((t, i) => (
            <Badge key={i} bg="success" className="me-2">
              {t}
            </Badge>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        {project.demo && (
          <Button variant="outline-light" href={project.demo} target="_blank">
            Live Demo
          </Button>
        )}
        {project.code && (
          <Button variant="outline-success" href={project.code} target="_blank">
            Source Code
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectModal;
