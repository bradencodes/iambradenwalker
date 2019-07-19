import React, { Fragment } from 'react'

const Projects = ({ projectsRef }) => {
  return (
    <Fragment>
      <div className='intro-text snap'>
        <div className='intro-text-container'>
          <span className='invisible' ref={projectsRef}>
            I
          </span>
          <span className='invisible'> HAVE</span>
          <span> PROJECTS.</span>
        </div>
      </div>
    </Fragment>
  )
}

export default Projects
