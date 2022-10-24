import React from 'react'
import { motion } from 'framer-motion'
import { Skill as SkillType } from '../typings'
import { urlFor } from '../sanity';

type Props = {
    skill: SkillType;
    transitionLeft?: boolean;
}

function Skill({ skill, transitionLeft }: Props) {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.img
                initial={{
                    x: transitionLeft ? -200 : 200,
                    opacity: 0
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src={urlFor(skill?.image).url()}
                className="rounded-full border border-gray-500 object-cover w-18 h-18 md:w-20 md:h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-18 h-18 md:w-20 md:h-20 xl:w-24 xl:h-24 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="text-lg font-bold text-black opacity-100">{skill?.title}</p>
                </div>
            </div>
        </div>
    )
}

export default Skill