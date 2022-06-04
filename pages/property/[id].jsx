import Image from "next/image"
import React from 'react'
import { RiRadioButtonFill  } from "react-icons/ri"
import Link from "next/link"
import { useRouter } from 'next/router'
import Baza from "../../public/Baza"

function Detali() {
  const router = useRouter()
  const { id } = router.query
  const obyekt = Baza.find(d => d.id == id ? d : null);

  return (
    <div className='w-full'>
      <div className="w-screen h-[40vh] lg:h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] lg:h-[50vh] bg-black/80 z-10" />
        <Image 
          className="absolute z-1" 
          layout="fill" 
          objectFit="cover" 
          src={obyekt.img.src} alt='/' 
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2"> {obyekt.title} </h2>
          <h3>React js / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className="mx-auto max-w-[1240px] p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overbiew</h2>
          <p>
            {obyekt.description}
          </p>
          <Link href={obyekt.siteLink}>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
          <Link href={obyekt.githubLink}>
          <button className="px-8 py-2 mt-4">code</button>
          </Link>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              {obyekt.skills.map((sik, i) => (
                <p key={i} className="text-gray-600 flex items-center"><RiRadioButtonFill className="pr-1" /> {sik}</p>
              ))}
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

export default Detali

