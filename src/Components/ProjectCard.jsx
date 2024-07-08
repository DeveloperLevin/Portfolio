import React from 'react'

function ProjectCard({projectName, desc, img}) {
  return (
    <div className='flex flex-col justify-center items-center bg-white max-w-[220px]'>
        <div>
            <img src={img} alt="project image" className='w-full h-auto'/>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <h3 className='text-lg font-bold'>{projectName}</h3>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default ProjectCard