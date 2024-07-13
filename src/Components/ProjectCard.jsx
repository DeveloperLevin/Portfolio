import React from 'react'
import '../app.css'
import '../style.css'

function ProjectCard({projectName, desc, img}) {
  return (
    <div className='justify-center items-center mt-4 card'>
        <div className='image-cover'>
            <img src={img} alt="project image" className='project-img'/>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <h3 className='text-lg font-bold'>{projectName}</h3>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default ProjectCard