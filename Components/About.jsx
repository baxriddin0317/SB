import React from 'react'
import Image from 'next/image'
import Img from "../public/Assets/img-2.jpg"

function About() {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-6'>
        <div className='max-w-7xl px-5 mx-auto md:grid grid-cols-3 gap-8'>
            <div data-aos="fade-right" className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-brand-main'>About</p>
                <h2 className='py-4'>Who I am</h2>
                <p className='py-2 text-gray-600'>
                Hello and welcome to my profile! I am an experienced freelancer with a strong background in front-end development. With a passion for creating captivating websites, I specialize in utilizing technologies such as React.js, Next.js, JavaScript, Tailwind CSS, Bootstrap, HTML, CSS, and SCSS to bring designs to life.
                </p>
                <p className='py-2 text-gray-600'>
                As a dedicated freelancer, I have been honing my skills for a significant period of time. I pride myself on delivering exceptional work that meets your requirements, combining creativity with functionality to produce outstanding results. I am highly responsive, ensuring effective communication and collaboration throughout the project.
                </p>
                <p className='py-2 text-gray-600'>
                With a deep understanding of the freelancing industry, I have successfully completed numerous projects, earning a reputation for reliability, efficiency, and high-quality work. I am committed to staying updated with the latest trends and advancements in the field, allowing me to deliver cutting-edge solutions.
                </p>
                <p className='py-2 text-gray-600'>
                If you are looking for a dedicated professional who is passionate about delivering exceptional results, I am the freelancer for you. Let's discuss your project in detail and work together to bring your vision to life. I am excited to embark on this journey with you!
                </p>
            </div>
            <div data-aos="fade-left" className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl overflow-hidden flex items-center justify-center
            p-4 '>
                <Image className='hover:scale-105 ease-in duration-300' src={Img} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default About