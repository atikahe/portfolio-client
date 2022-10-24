import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience as WorkExperience } from '../typings'

type Props = {
    experiences: WorkExperience[]
}

function Experience({ experiences }: Props) {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl z-20'>
                Experience
            </h3>

            <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#39FF14]/30'>
                {experiences.map((experience) => (
                    <ExperienceCard
                        key={experience._id}
                        experience={experience}
                    />
                ))}             
            </div>
        </motion.div>
    )
}

export default Experience