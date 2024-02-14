import React from 'react'
import { motion } from 'framer-motion'

const AboutMission = () => {
  return (
    <div className='flex flex-col-2 items-center justify-between pb-[10rem]  space-x-[2rem]'>

        <motion.div className='flex flex-col mt-[3rem] space-y-2 text-center border-2 border-zinc-500 rounded-lg shadow-lg shadow-zinc-700 py-4 pb-7 px-4'
        initial={{ y: 0, opacity: 0 }} animate={{ y:10, opacity: 1 }} transition={{ duration: 1.0 }}
        >
            <motion.h1 className='text-4xl text-center uppercase text-zinc-800'
        
            initial={{ y: 0, opacity: 0 }} animate={{ y:10, opacity: 1 }} transition={{ duration: .8 }}>
                mission
            </motion.h1>
            <motion.p className='text-3xl text-center text-zinc-800'
            initial={{ y: 0, opacity: 0 }} animate={{ y:10, opacity: 1 }} transition={{ duration: 1.0 }}>
                We're dedicated to making the wisdom of the Bible accessible to all, with a user-friendly platform designed for seekers and believers alike.
            </motion.p>
            </motion.div>


        <motion.div className='flex flex-col space-y-2 text-center  border-2 border-zinc-500 rounded-lg shadow-lg shadow-zinc-700 py-4 pb-7 mt-[20rem] px-4'
            initial={{ y: 0, opacity: 0 }} animate={{ y:10, opacity: 1 }} transition={{ duration: 1.0 }}
            >
            <motion.h1 className='text-4xl text-center uppercase text-zinc-800 '
            initial={{ y: 0, opacity: 0 }} animate={{ y:10, opacity: 1 }} transition={{ duration: .8 }}>
            vision
            </motion.h1>
            <motion.p className='text-3xl text-center text-zinc-800'
            initial={{ y: 0, opacity: 0 }} animate={{ y:10, opacity: 1 }} transition={{ duration: 1.0 }}>
            Our vision is to make Bible study accessible to everyone, regardless of their financial circumstances.
            </motion.p>
        </motion.div>
        
    </div>
  )
}

export default AboutMission