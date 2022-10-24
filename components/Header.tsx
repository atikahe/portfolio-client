import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import { Social } from '../typings'
import Link from 'next/link'

type Props = {
    socials: Social[]
}

export default function Header({ socials }: Props): any {
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
                {socials.map((social) => (     
                    <SocialIcon 
                        key={social._id}
                        url={social.url}
                        fgColor='gray' 
                        bgColor='transparent'
                    />
                ))}
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
                className='flex flex-row item-center text-gray-300 align-center'
            >
                <Link href="#contact">
                    <div>
                        <SocialIcon
                            className='cursor-pointer'
                            network='email'
                            fgColor='gray'
                            bgColor='transparent'
                        />
                        <p className='uppercase hidden md:inline-flex text-sm text-gray-400 cursor-pointer'>
                            Get in touch
                        </p>
                    </div>
                </Link>
            </motion.div>
        </header>
    )
}