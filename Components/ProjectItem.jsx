import React from 'react'
import Image from "next/image"
import Link from "next/link"

function ProjectItem({project}) {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-brand-main to-brand-blue'>
        <Image className='rounded-xl group-hover:opacity-10' src={project.bacImg} alt='/' />
        <div className='hidden group-hover:flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <h3 className='text-center text-2xl text-white tracking-widest'>{project.title}</h3>
            <p className='pb-4 pt-2 text-white text-center'>
              {project.skill}
            </p>
            <Link href={project.projectUrl}>
                <p className='w-[150px] text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
            </Link>
        </div>
    </div>
  )
}

export default ProjectItem