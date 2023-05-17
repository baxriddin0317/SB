import React from 'react'
import ProjectItem from './ProjectItem'
import { data } from '../lib/Projects'

function Projects() {
  return (
    <div id='projects' className='w-full '>
        <div className='max-w-7xl mx-auto px-7 py-16'>
            <p className='text-xl tracking-widest uppercase text-brand-main'>Projects</p>
            <h2 className='py-4'>What I`ve Built</h2>

            <div className='grid md:grid-cols-2 gap-8'>
              {data.map(project => (
                <ProjectItem key={project.id} project={project} />
              )) }
            </div>

        </div>

    </div>
  )
}

export default Projects