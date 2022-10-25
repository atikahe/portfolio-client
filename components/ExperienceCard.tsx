import React from 'react'
import { motion } from 'framer-motion'
import { Experience as WorkExperience } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    experience: WorkExperience
}

function ExperienceCard({ experience }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-5 md:space-y-7 flex-shrink-0 w-screen sm:w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden z-10'>
            <motion.img
                initial={{ y: -100, opacity:0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0}}
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
                src={urlFor(experience?.companyImage).url()}
                alt="" 
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-3xl sm:text-4xl font-light'>{experience.jobTitle}</h4>
                <p className='text-xl sm:text-2xl font-bold mt-1'>{experience.company}</p>
                <div className='flex space-x-2 my-2'>
                    {experience.technologies.map(tech => (
                        <img
                            key={tech._id} 
                            className='h-6 w-6 md:h-8 md:w-8 rounded-full object-cover object-center'
                            src={urlFor(tech.image).url()}
                            alt={tech.title}
                            title={tech.title}
                        />
                    ))}
                </div>
                <p className='uppercase py-5 text-gray-300'>
                    {new Date(experience.dateStarted).toDateString()}
                    {" "}-{" "}
                    {experience.isCurrentlyWorkingHere 
                        ? "Present"
                        : new Date(experience.dateEnded).toDateString()}
                </p>
                {/**/}
                <ul className='list-disc space-y-2 ml-5 text-sm md:text-lg scrollbar-thin scrollbar-track-black scrollbar-thumb-[#39FF14]/30 max-h-96 max-w-42 overflow-y-scroll pr-10'>
                    {experience.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard