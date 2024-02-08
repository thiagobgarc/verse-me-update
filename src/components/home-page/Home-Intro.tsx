import React from 'react'
import { motion } from 'framer-motion'

const HomeIntro = ({text}: {text: string}) => {
  return (
    <motion.div initial={{ y: 0, opacity: 0 }} animate={{ y:25, opacity: 1 }} transition={{ duration: .6 }} className='flex flex-col items-center justify-center absolute inset-0'>
      <h1 className='text-center text-2xl lg:text-3xl rounded text-[#000000] border-solid border-4 border-[#000000] border-padding mx-2 px-2 py-1 shadow-2xl shadow-[#000000] transition-shadow ease-in-out text-bolder md:border-1 md:mx-2 md:px-2 md:py-0.5 md:shadow-none md:shadow-[#000000] md:transition-shadow md:hover:shadow-2xl md:hover:shadow-[#000000] md:hover:transition-shadow sm:hover:transition-shadow"
      '>{text}</h1>
    </motion.div>
  )
}

export default HomeIntro