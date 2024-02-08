import React from 'react'
import { motion } from 'framer-motion'

interface CardProps {
    title: string
    content: string
}

const Card = ({title, content}: CardProps) => {
  return (
    <div>
        <motion.div className="overflow-hidden border border-gray-300 rounded-lg transition-all duration-500 hover:h-auto hover:scale-105" 
    initial={{ y: 0, opacity: 0 }} animate={{ y:25, opacity: 1 }} transition={{ duration: .5 }}>
    <div className="p-4">
    <h3 className='text-2xl font-bold mb-4'>{title}</h3>
    <div className="h-0 opacity-0 transition-all duration-500 hover:h-auto hover:opacity-100">
            <img src={content} alt={title} className='w-full h-auto'/>
        </div>
    </div>
    </motion.div>
    </div>
  )
}

export default Card