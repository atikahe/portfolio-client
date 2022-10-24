import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../typings'

type Props = {
    pageInfo: PageInfo
}

export default function About({ pageInfo }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Here is a <span className='underline decoration-[#39FF14]/50'>little</span>{" "} background
                </h4>
                <p className='text-sm'>
                    {pageInfo?.backgroundInformation}
                </p>
            </div>
        </motion.div>
    )
}
