import React from 'react'
import { motion } from 'framer-motion'

const AboutText = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-[3rem] space-y-4'>
        <motion.h1 className='text-5xl text-center uppercase text-zinc-800'
        initial={{ y: 0, opacity: 0 }} animate={{ y:25, opacity: 1 }} transition={{ duration: .5 }}
        >
            our story
        </motion.h1>
        <motion.p className='text-3xl text-center text-zinc-800'
        initial={{ y: 0, opacity: 0 }} animate={{ y:25, opacity: 1 }} transition={{ duration: .7 }}
        >
            We're dedicated to making the wisdom of the Bible accessible to all, with a user-friendly platform designed for seekers and believers alike.
        </motion.p>
    </div>
  )
}

export default AboutText