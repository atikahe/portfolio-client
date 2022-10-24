import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function Credit({}: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Credit
            </h3>
            <div className='space-y-10 px-0 md:px-10'>
                <p className='text-lg text-center'>
                    Credit where credits due.<br />
                    Absolute thanks to THE mvp,{"  "}
                    <a href="https://www.youtube.com/c/SonnySangha" className="underline decoration-[#39FF14]/50">
                        Sonny Sangha
                    </a>{"  "}
                    for such a compact material on how to build this portfolio. Mad respect in how hes bringing me up to speed to all these unfamiliar stacks within hours. Go support his page!
                </p>
            </div>
        </motion.div>
    )
}
