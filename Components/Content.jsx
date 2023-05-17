import React from 'react'
import Link from "next/link"
import Image from "next/image"
import Img from "../public/Assets/img-1.jpg"
import { AiOutlineMail } from "react-icons/ai"
import { FaTelegram, FaGithub } from "react-icons/fa"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { HiOutlineChevronDoubleUp } from "react-icons/hi"

function Content() {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-7xl m-auto px-7 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-brand-main'>Contact</p>
            <h2 className='py-4'>Get In Touch</h2>
            
            <div className='grid lg:grid-cols-5 gap-8'>
                {/* left */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    {/* image */}
                    <div className="lg:p-4">
                        <div className='w-full h-full rounded-xl overflow-hidden'>
                            <Image className='object-cover w-full hover:scale-105 ease-in duration-300' src={Img} alt="#" />
                        </div>
                        <div>
                            <h2 className="py-2 text-lg md:text-2xl">
                                Akhmadaliyev Bakhriddinkhuja
                            </h2>
                            <p>Frot-End Developer </p>
                            <p className="py-4">
                                I am available for freelancer or full-time positions. Contact me and let`s talk.
                            </p>
                        </div>

                        {/* icon links */}
                        <div>
                            <p className="uppercase pt-8">Connect with me</p>
                            <div className="flex items-center justify-between py-4">
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-500'>
                                    <Link href="https://t.me/Baxriddinxoja_Axmadaliyev">
                                        <a target="_blank">
                                        <FaTelegram size={30} className='text-brand-main' />
                                        </a>
                                    </Link>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-500'>
                                    <Link href="https://github.com/baxriddin0317">
                                        <a target="_blank">
                                        <FaGithub size={30} className='text-brand-main' />
                                        </a>
                                    </Link>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-500'>
                                    <Link href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
                                    <a target="_blank">
                                    <AiOutlineMail size={30} className='text-brand-main' />
                                    </a>
                                    </Link>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-500'>
                                    <Link href="tel:+998916110317">
                                    <BsFillPersonLinesFill size={30} className='text-brand-main' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* right */}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray=400 rounded-xl lg:p-4'>
                    <div className='p-4'>

                        <form>
                            <div className='grid md:grid-cols-2 gap-4 w-full py--2'>
                                <div className="flex flex-col">
                                    <label className="uppercase text-sm py-2">Name</label>
                                    <input className='border-2 rounded-lg p-3 flex border-garay-300 outline-none' type="text" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="uppercase text-sm py-2">Phone Number</label>
                                    <input className='border-2 rounded-lg p-3 flex border-garay-300 outline-none' type="text" />
                                </div>
                            </div>
                            <div className="flex flex-col py-2">
                                <label className="uppercase text-sm py-2">Email</label>
                                <input className='border-2 rounded-lg p-3 flex border-garay-300 outline-none' type="email" />
                            </div>
                            <div className="flex flex-col py-2">
                                <label className="uppercase text-sm py-2">Subject</label>
                                <input className='border-2 rounded-lg p-3 flex border-garay-300 outline-none' type="email" />
                            </div>
                            <div className="flex flex-col py-2">
                                <label className="uppercase text-sm py-2">Message</label>
                                <textarea className='border-2 outline-none p-3 rounded-lg border-gray-300' rows='10'></textarea>
                            </div>
                            <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                        </form>

                    </div>
                </div>
            </div>
        
            <div className='flex justify-center py-12'>
                <Link href="/">
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                        <HiOutlineChevronDoubleUp className='text-brand-main' size={30} />
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Content