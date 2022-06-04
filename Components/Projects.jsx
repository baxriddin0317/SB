import React from 'react'
import ProjectItem from './ProjectItem'

import Furniking from "../public/Assets/furniking.jpg"
import Food from "../public/Assets/food.jpg"
import Travel from "../public/Assets/travel.jpg"
import Newcast from "../public/Assets/newcast.jpg"
import Blog from "../public/Assets/blog.jpg"
import Cmp from "../public/Assets/cmp.jpg"
import Imprium from "../public/Assets/imperium.jpg"
import Kiwi from "../public/Assets/kiwi.jpg"

function Projects() {
  return (
    <div id='projects' className='w-full '>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I`ve Built</h2>

            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem title="Furniking" backroungImg={Furniking} projectUrl="/furniking" />
                <ProjectItem title="Food" backroungImg={Food} projectUrl="/food" />
                <ProjectItem title="Travel" backroungImg={Travel} projectUrl="/travel" />
                <ProjectItem title="Newcast" backroungImg={Newcast} projectUrl="/newcast" />
                <ProjectItem title="Bobur Blog" backroungImg={Blog} projectUrl="/blog" />
                <ProjectItem title="CMP" backroungImg={Cmp} projectUrl="/cmp" />
                <ProjectItem title="IMPERIUM" backroungImg={Imprium} projectUrl="/imperium" />
                <ProjectItem title="KIWI" backroungImg={Kiwi} projectUrl="/kiwi" />
            </div>

        </div>

    </div>
  )
}

export default Projects