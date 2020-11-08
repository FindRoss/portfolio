import React from 'react';
import './Projects.css';

function ProjectLayout({ image, title, imgStart, description, used, url }) {

  const flexDir = (imgStart === 'start') ? 'reverse' : '';

  return (
    <div className={`project__layout ${flexDir}`}>
      <div className="project__layout--content">
        <h3 className="project__layout--heading">{title}</h3>
        <p className="project__layout--desc">{description}</p>
        <a className="project__layout--link" href={url} target="_blank" rel="noopener noreferrer">View</a>
      </div>
      <div className="project__layout--image-wrapper">
        <img className="project__layout--image" src={image} alt={title} />
      </div>
    </div>
  )
};

export default ProjectLayout
