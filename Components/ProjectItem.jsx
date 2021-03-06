import React from 'react'
import Image from "next/image"
import Link from "next/link"

function ProjectItem({title, backroungImg, projectUrl}) {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
        <Image className='rounded-xl group-hover:opacity-10' src={backroungImg} alt='/' />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-center text-2xl text-white tracking-widest'>{title}</h3>
            <p className='pb-4 pt-2 text-white text-center'>React js</p>
            <Link href={projectUrl}>
                <p className='w-[150px] text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
            </Link>
        </div>
    </div>
  )
}

export default ProjectItem