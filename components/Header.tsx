import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

export default function Header({}: Props): any {
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center '>
            <motion.div 
                initial={{
                    x: -500,
                    opacity:0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{ duration: 1.5 }}
                className='flex flex-row item-center'
            >
                {/* Social icons */}
                <SocialIcon 
                    url="https://www.github.com/atikahe"
                    fgColor='gray' 
                    bgColor='transparent'
                />
                <SocialIcon 
                    url="https://www.gitlab.com/atikah.efendi"
                    fgColor='gray' 
                    bgColor='transparent'
                />
                <SocialIcon 
                    url="https://www.linkedin.com/in/atikah-efendi-1310"
                    fgColor='gray' 
                    bgColor='transparent'
                />
                <SocialIcon 
                    url="https://www.dev.to/atikahe"
                    fgColor='gray' 
                    bgColor='transparent'
                />
            </motion.div>

            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{ duration:1.5 }}
                className='flex flex-row item-center text-gray-300'
            >
                <SocialIcon
                    className='cursor-pointer'
                    network='email'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400 cursor-pointer'>
                    Get in touch
                </p>
            </motion.div>
        </header>
    )
}