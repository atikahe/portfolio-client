import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

export default function Hero({}: Props): any {
    const [text, count] = useTypewriter({
        words: ["Hello! The Name's Atikah", "<Indonesian />", "<Also-a-Coder />", "<K-Food-Connoisseur />", "<Biker { on good days } />"],
        loop: true,
        delaySpeed: 2000  
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img 
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src="https://avatars.githubusercontent.com/u/26432281?v=4"
                alt="Profile picture"
            />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                    Software Developer
                </h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#39FF14' />
                </h1>

                <div className='pt-5'>
                    <a href="#about">
                        <button className='heroButton'>About</button>
                    </a>
                    <a href="#experience"> 
                        <button className='heroButton'>Experience</button>
                    </a>
                    <a href="#skills">
                        <button className='heroButton'>Skills</button>
                    </a>
                    <a href="#projects">
                        <button className='heroButton'>Projects</button>
                    </a>
                    {/* <div className='heroButton'></div> */}
                </div>
            </div>
        </div>
    )
}