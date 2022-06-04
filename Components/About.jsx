import React from 'react'

function About() {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I am</h2>
                <p className='py-2 text-gray-600'>// I am not your normal developer</p>
                <p className='py-2 text-gray-600'>
                    I have spent the last 1 years in the fire service working as a professional firefighter  paramedic. I have always had a knack for technology and workin with computers. In 2022 I started working with HTML  CSS to make some minor edits on a small busness website that I was operating. What I thought was just a few small edits turned into a love for programming.
                </p>
                <p className='py-2 text-gray-600'>
                    Fascinnated with how intricate programming can be I was quickly drawn to learn more. I started learning javascript an was even more enthused with making websites interactive. I then started freelancing for e-commerce companies on the shopify platform. I am now spending my time building projects with React Js and learning ne technologies. 
                </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>
                    Check out some of my latest projects.
                </p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center
            p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src="https://images.unsplash.com/photo-1593640495253-23196b27a87f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="/" />
            </div>
        </div>
    </div>
  )
}

export default About