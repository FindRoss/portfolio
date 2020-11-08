import React from 'react';

function Section({ children, target, theClass }) {

  return (
    <div className={theClass} style={{ padding: "6em 0" }} id={target}>
      {children}
    </div>
  )
}

export default Section;
