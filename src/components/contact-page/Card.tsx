import React from 'react'
import { motion } from 'framer-motion'
import Button from '../Button'

interface CardProps {
    title: string
    content: string
    text: string
}

const Card = ({title, content, text}: CardProps) => {
  return (
    <div>
        <motion.div className="overflow-hidden border border-gray-300 rounded-lg transition-all duration-500 hover:h-auto hover:scale-105 bg-gradient-to-br from-gray-300 to-gray-500" 
    initial={{ y: 0, opacity: 0 }} animate={{ y:25, opacity: 1 }} transition={{ duration: .6 }}>
    <div className="p-4">
    <h3 className='text-2xl font-bold mb-4'>{title}</h3>
    <div className="h-0 opacity-0 transition-all duration-500 hover:h-auto hover:opacity-100">
            <img src={content} alt={title} className='w-full h-auto'/>
            <a href='/'className='flex flex-col items-center justify-center absolute inset-0 mt-[5rem] opacity-50'>
                <button className='text-[#000000] border-solid border-[.25rem] border-[#000000] border-padding px-2 py-1 shadow-2xl shadow-[#000000] transition-shadow ease-in-out rounded-xl text-xl text-bolder transform hover:scale-105 flex'>{text}</button>
            </a>
        </div>
    </div>
    </motion.div>
    </div>
  )
}

export default Card