import React from 'react'
import Image from "next/image"

function Skills() {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 gap-4 lg:grid-cols-4'>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="https://ru.seaicons.com/wp-content/uploads/2015/07/Other-html-5-icon.png" width={64} height={64} alt="/" />
                        </div>
                        <div className='flex flex-sol items-center justify-center'>
                            <h2>HTML</h2>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="https://seeklogo.com/images/C/css-3-logo-023C1A7171-seeklogo.com.png" width="64" height="64" alt="/" />
                        </div>
                        <div className='flex flex-sol items-center justify-center'>
                            <h2>CSS</h2>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" width={46} height={46} alt="/" />
                        </div>
                        <div className='flex flex-sol items-center justify-center'>
                            <h3>Javascript</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width={64} height={64} alt="/" />
                        </div>
                        <div className='flex flex-sol items-center justify-center'>
                            <h2>React</h2>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" width={64} height={64} alt="/" />
                        </div>
                        <div className='flex flex-sol items-center justify-center'>
                            <h2>Tailwind css</h2>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="https://www.svgrepo.com/show/332401/github.svg" width={64} height={64} alt="/" />
                        </div>
                        <div className='flex flex-sol items-center justify-center'>
                            <h2>GitHub</h2>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png" width={64} height={64} alt="/" />
                        </div>
                        <div className='flex flex-sol items-center justify-center'>
                            <h2>SCSS</h2>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/2560px-Nextjs-logo.svg.png" width={64} height={64} alt="/" />
                        </div>
                        <div className='flex flex-sol items-center justify-center'>
                            <h3>Next.js</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills