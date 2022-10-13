import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCard({}: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{ y: -100, opacity:0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0}}
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
                src="https://media-exp1.licdn.com/dms/image/C560BAQF8w_6Xhnl8_g/company-logo_200_200/0/1641374061663?e=1673481600&v=beta&t=ULZHvjwXDLViKRTl-A24yPAg2HEKA2QAgiBnHkGOpDs"
                alt="" 
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Back End Developer</h4>
                <p className='font-bold text-2xl mt-1'>Anywhere.co</p>
                <div className='flex space-x-2 my-2'>
                    <img 
                        className='h-10 w-10 rounded-full object-cover object-center'
                        src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" 
                        alt=""
                    />
                    <img 
                        className='h-10 w-10 rounded-full object-cover object-center'
                        src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" 
                        alt=""
                    />
                    <img 
                        className='h-10 w-10 rounded-full object-cover object-center'
                        src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" 
                        alt=""
                    />
                </div>
                <p className='uppercase py-5 text-gray-300'>Started work... - Ended...</p>

                <ul className='list-disc space-y-2 ml-5 text-lg'>
                    <li>Summary points Summary points Summary points Summary points</li>
                    <li>Summary points Summary points Summary points Summary points</li>
                    <li>Summary points Summary points Summary points Summary points</li>
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard