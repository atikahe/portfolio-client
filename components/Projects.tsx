import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    projects: Project[]
}

export default function Projects({ projects }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }} 
            className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly items-center z-0"
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Projects
            </h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#39FF14]/30">
                {projects.map((project, i) => (
                    <div key={project?._id} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                        {project?.image 
                            ?   <motion.img 
                                    initial={{ y: -300, opacity: 0 }}
                                    transition={{ duration: 1.2 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    className="w-10 h-10 md:w-32 md:h-32 xl:w-[200px] xl:h-[200px] object-cover object-center"
                                    src={urlFor(project?.image).url()}
                                    alt="" 
                                />
                            : null
                        }

                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                                <h4 className="text-2xl sm:text-4xl font-semibold text-center">
                                    <a href={project?.linkToBuild} target="_blank" rel="noreferrer">
                                        <span className="underline decoration-[#39FF14]/50">
                                            Project {i + 1}{" "} of {projects.length}:
                                        </span>{" "}
                                        {project?.title}
                                    </a>
                                </h4>

                            <div className='flex items-center space-x-2 justify-center'>
                                {project?.technologies?.map(tech => (
                                    <img className="h-8 w-8 rounded-full object-cover object-center"
                                        key={tech._id}
                                        src={urlFor(tech.image).url()}
                                        alt=""
                                        title={tech.title}
                                    />
                                ))}
                            </div>

                            <div className="flex items-center space-x-2 justify-center">
                                {project?.tags.map((tag, i) => (
                                    <div key={i} className={`text-center border border-transparent bg-[#C7BEB0]/30 px-5 py-2 rounded-full`}>
                                        {tag}
                                    </div>
                                ))}
                            </div>

                            <p className="text-sm sm:text-lg text-center md:text-left">
                                {project?.summary}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full absolute top-[30%] bg-[#39FF14]/10 left-0 h-[500px] -skew-y-12" />
        </motion.div>
    )
}
