import React from 'react'

function ProjectCard({projectName, desc, img}) {
  return (
    <div>
        <div>
            <img src={img} alt="project image" />
        </div>
        <div>
            <h3>{projectName}</h3>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default ProjectCard