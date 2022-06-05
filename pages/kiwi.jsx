import Image from "next/image"
import React from 'react'
import { RiRadioButtonFill  } from "react-icons/ri"
import Link from "next/link"
import Kiwi from "../public/Assets/kiwi.jpg"

function kiwi() {

  return (
    <div className='w-full'>
      <div className="w-screen h-[40vh] lg:h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] lg:h-[50vh] bg-black/80 z-10" />
        <Image 
          className="absolute z-1" 
          layout="fill" 
          objectFit="cover" 
          src={Kiwi} alt='/' 
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Kiwi </h2>
          <h3>React js / HTML / API</h3>
        </div>
      </div>

      <div className="mx-auto max-w-[1240px] p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overbiew</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum maiores excepturi quibusdam ullam repellat maxime porro vero optio voluptas perferendis amet, dolores enim alias reiciendis repellendus, sit minima assumenda nam at? Fugiat quas quam, ipsum minima corporis ipsa molestiae libero.
          </p>
          <Link href="https://xoja-kiwi.netlify.app/">
          <a target="_blank">
              <button className="px-8 py-2 mt-4 mr-8">Demo</button>
            </a>
          </Link>
          <Link href="https://github.com/baxriddin0317/myKiwi">
          <a target="_blank">
              <button className="px-8 py-2 mt-4">Code</button>
            </a>
          </Link>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-gray-600 flex items-center"><RiRadioButtonFill className="pr-1" /> React js</p>
                <p className="text-gray-600 flex items-center"><RiRadioButtonFill className="pr-1" /> SCSS</p>
                <p className="text-gray-600 flex items-center"><RiRadioButtonFill className="pr-1" /> Javascrip</p>
                <p className="text-gray-600 flex items-center"><RiRadioButtonFill className="pr-1" /> HTML</p>
                <p className="text-gray-600 flex items-center"><RiRadioButtonFill className="pr-1" /> Feck API</p>
            </div>
          </div>
        </div>

        <Link href="/#projects" >
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>

    </div>
  )
}

export default kiwi

