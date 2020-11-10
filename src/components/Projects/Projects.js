import React from 'react'
import './Projects.css'
import { projectData } from './data';
import Section from '../Section';
import ProjectLayout from './ProjectLayout';
import Heading from '../Heading';


function Projects() {

  return (
    <Section theClass="projects__section" target="projects-section">
      <div className="container">
        <Heading title="Projects" subtitle="Some of my personal and professional projects that I have had fun working on." />
        <div className="projects">
          {projectData.map((data, index) => {
            return (
              <ProjectLayout key={index} {...data} />
            );
          })}
        </div>
      </div>
    </Section>
  )
}

export default Projects; 
