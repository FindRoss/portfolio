import React from 'react'
import './Heading.css'

function Heading({ title, subtitle }) {
  const enteredTitle = title ? (<h2>{title}</h2>) : null;
  const enteredSubtitle = subtitle ? (<p>{subtitle}</p>) : null;


  return (
    <div className="heading">
      {enteredTitle}
      {enteredSubtitle}
    </div>
  )
}

export default Heading; 
