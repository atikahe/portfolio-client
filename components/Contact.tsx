import React from 'react'
import { motion } from 'framer-motion'
import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'


type Props = {}
type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
}

export default function Contact({}: Props) {
    const { 
        register,
        handleSubmit,
        formState: { errors } 
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `https://mail.google.com/mail/u/${formData.email}/?view=cm&fs=1&to=atikahefendi31@gmail.com&su=${formData.subject}&body=${formData.message}. ${formData.name}, ${formData.email}`
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Contact
            </h3>

            <div className="flex flex-col space-y-10">
                <h4 className="text-4xl font-semibold text-center">
                    Something pique your interest?{" "}
                    <span className='underline decoration-[#39FF14]/50'>Lets talk.</span>
                </h4>

                <div className="space-y-10">
                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="text-[#39FF14] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">atikahefendi31@gmail.com</p>
                    </div>

                    <div className="flex items-center space-x-5 justify-center">
                        <MapPinIcon className="text-[#39FF14] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">Bandung, Indonesia</p>
                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col space-y-2 w-fit mx-auto"
                    >
                        <div className="flex space-x-2">
                            <input 
                                {...register('name')}  
                                placeholder="Name" 
                                className="contactInput" 
                                type="text" 
                            />
                            <input 
                                {...register('email')} 
                                placeholder="Email"
                                className="contactInput"
                                type="email"
                            />
                        </div>

                        <input 
                            {...register('subject')} 
                            placeholder="Subject" 
                            className="contactInput" 
                            type="text" 
                        />
                        
                        <textarea 
                            {...register('message')} 
                            placeholder="Message" 
                            className="contactInput" 
                        />
                        <button
                            type="submit" 
                            className="bg-[#39FF14]/70 py-5 px-10 rounded-md text-[rgb(36,36,36)] font-bold text-lg"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </motion.div>
    )
}
