import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function Projects({}: Props) {
    const projects = new Array(5).fill('lorem')
    
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
                    <div key={i} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                        <motion.img 
                            initial={{ y: -300, opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="w-32 h-32 xl:w-[200px] xl:h-[200px] object-cover object-center"
                            src="https://freewordle.org/images/wordle-game-icon-512.png"
                            alt="" 
                        />

                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-4xl font-semibold text-center">
                                <span className="underline decoration-[#39FF14]/50">
                                    Project #{i}:
                                </span>
                                {" "}{project}
                            </h4>

                            <p className="text-lg text-center md:text-left">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur eius soluta veniam voluptatibus dolor. Esse voluptate at dicta eius incidunt ullam repellendus quos dolorem, sint eligendi rem veniam, quam vel?
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full absolute top-[30%] bg-[#39FF14]/10 left-0 h-[500px] -skew-y-12" />
        </motion.div>
    )
}
