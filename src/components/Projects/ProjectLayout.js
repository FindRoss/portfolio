import React from 'react';
import ProjectUsed from './ProjectUsed';
import './Projects.css';

function ProjectLayout({ image, title, description, used, url }) {

  return (
    <div className="project__layout">
      <div className="project__layout--image--wrapper">
        <img className="project__layout--image" src={image} alt={title} />
      </div>
      <div className="project__layout--content">
        <h3 className="project__layout--heading">{title}</h3>
        <p className="project__layout--desc">{description}</p>
        {(used.length !== 0) ? <ProjectUsed used={used} /> : ''}
        <a className="project__layout--link" href={url} target="_blank" rel="noopener noreferrer">View <i class="fas fa-external-link-alt"></i></a>

      </div>
    </div>
  )
};

export default ProjectLayout
