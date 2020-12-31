import React from 'react'

const ProjectUsed = ({ used }) => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: '0.75rem' }}>Used:</div>
      <div className="project__layout--used">
        {used.map(u => <span className="project__layout--used-tech">{u}</span>)}
      </div>
    </div>
  )
}

export default ProjectUsed
