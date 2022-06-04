import React from 'react'
import { AiOutlineMail } from "react-icons/ai"
import { FaTelegram, FaGithub } from "react-icons/fa"
import { BsFillPersonLinesFill } from "react-icons/bs"

function Main() {
  return (
    <div id='home' className='w-full h-screen text-center z-0'>
        <div className='max-w-[1240px] w-full h-full mx-auto flex justfy-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest test-gray-600'>Let's build something together</p>
                <h1 className='py-4 text-gray-700'>
                    Hi, I'm <span className='text-[#5651e5]'>Clint</span> 
                </h1>
                <h1 className='py-4 text-gray-700'>
                    A Front-End web Developer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolor, illum ipsam quae deserunt nisi similique eum perspiciatis non laboriosam. Ab, commodi minima pariatur deleniti optio fugit porro eius doloribus.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-500'>
                        <FaTelegram size={30} />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-500'>
                        <FaGithub size={30} />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-500'>
                        <AiOutlineMail size={30} />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-500'>
                        <BsFillPersonLinesFill size={30} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main