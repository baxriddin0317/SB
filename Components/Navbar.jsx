import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai"
import { FaTelegram, FaGithub } from "react-icons/fa"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { useRouter } from 'next/router'
import Logo from "../public/Assets/logo.png"

function Navbar() {
    const [ nav, setNav ] = useState(false);
    const [ shadow, setShadow ] = useState(false);
    const [ navBg, setNavBg ] = useState("#ecf0f3"); 
    const [ linkColor, setLinkColor ] = useState("#1f2937"); 
    const router = useRouter()
    useEffect(() => {
        if(
            router.asPath === '/furniking' ||
            router.asPath === '/food' ||
            router.asPath === '/blog' ||
            router.asPath === '/cmp' ||
            router.asPath === 'imperium' ||
            router.asPath === '/kiwi' ||
            router.asPath === '/newcast' ||
            router.asPath === '/travel'
        ){
            setNavBg('transparent')
            setLinkColor('#ecf0f3')
        }else{
            setNavBg('#ecf0f3');
            setLinkColor('#1f2937');
        }
    }, [router])

    const handleNav = () =>{
        setNav(!nav);
    }

    useEffect(() => {
        const handleShadow = () =>{
            if(window.scrollY >= 80){
                setShadow(true);
            }else{
                setShadow(false);
            }
        }

        window.addEventListener("scroll", handleShadow);
    }, [])

  return (
    <div style={{backgroundColor: `${navBg}`}} className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]' : 'fixed w-full h-20 z-[100]'}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Link href='/'>
                <Image 
                    className='cursor-pointer'
                    src={Logo}
                    alt='/' 
                    width='100' 
                    height="50" 
                />
            </Link>

            <div>
                <ul style={{color: `${linkColor}`}} className='hidden md:flex'>
                    <Link href="/#home">
                        <li className='ml-10 text-sm uppercase border-b border-transparent hover:text-[#5651e5] hover:border-[#5651e5] hover:border-b'>Home</li>
                    </Link>
                    <Link href="/#about">
                        <li className='ml-10 text-sm uppercase border-b border-transparent hover:text-[#5651e5] hover:border-[#5651e5] hover:border-b'>About</li>
                    </Link>
                    <Link href="/#skills">
                        <li className='ml-10 text-sm uppercase border-b border-transparent hover:text-[#5651e5] hover:border-[#5651e5] hover:border-b'>Skills</li>
                    </Link>
                    <Link href="/#projects">
                        <li className='ml-10 text-sm uppercase border-b border-transparent hover:text-[#5651e5] hover:border-[#5651e5] hover:border-b'>Projects</li>
                    </Link>
                    <Link href="/#contact">
                        <li className='ml-10 text-sm uppercase border-b border-transparent hover:text-[#5651e5] hover:border-[#5651e5] hover:border-b'>Contact</li>
                    </Link>
                </ul>
                <div className='md:hidden cursor-pointer' onClick={handleNav}>
                    <AiOutlineMenu style={{color: `${linkColor}`}} size={25} />
                </div>
            </div>
            
        </div>


        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'
                            : ""}>
            <div className={nav ? "fixed left-0 top-0 w-[75%] sm:w-[45%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <Image 
                            src={Logo} 
                            alt='/' 
                            width='87' 
                            height="35" 
                        />

                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose size={25} />
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'> Let`s build something legendary together</p>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='upparcase'>
                            <Link href='/#home'>
                                <li className='py-4 text-sm' onClick={handleNav}>Home</li>
                            </Link>
                            <Link href='/#about'>
                                <li className='py-4 text-sm' onClick={handleNav}>About</li>
                            </Link>
                            <Link href='/#skills'>
                                <li className='py-4 text-sm' onClick={handleNav}>Skills</li>
                            </Link>
                            <Link href='/#projects'>
                                <li className='py-4 text-sm' onClick={handleNav}>Projects</li>
                            </Link>
                            <Link href='/#contact'>
                                <li className='py-4 text-sm' onClick={handleNav}>Contact</li>
                            </Link>
                        </ul>
                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-[#5651e5]">
                                Let`s Connect
                            </p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-500'>
                                    <Link href="https://t.me/Baxriddinxoja_Axmadaliyev">
                                        <a target="_blank">
                                        <FaTelegram color="#5651e5" />
                                        </a>
                                    </Link>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-500'>
                                    <Link href="https://github.com/baxriddin0317">
                                        <a target="_blank">
                                        <FaGithub color="#5651e5" />
                                        </a>
                                    </Link>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-500'>
                                    <Link href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
                                    <a target="_blank">
                                    <AiOutlineMail color="#5651e5" />
                                    </a>
                                    </Link>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-500'>
                                    <Link href="tel:+998916110317">
                                    <BsFillPersonLinesFill color="#5651e5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar