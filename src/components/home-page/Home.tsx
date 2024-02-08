import React from 'react'
import HomeIntro from './Home-Intro'
import Button from '../Button'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className='flex flex-col relative'>
    <motion.img
        src='../public/pexels-johnmark-smith-272337.jpg'
        className='w-full h-[60vh] object-cover opacity-80 mt-[3rem] rounded-xl'
        alt='Background Image'
        initial={{ opacity: 0 }} animate={{ y: 1, opacity: 0.8 }} transition={{ duration: .5 }}
    />
    <HomeIntro text='Searching the Bible has just gotten a whole lot easier'/>
    <Button button='Get Started'/>
    </div>
  )
}

export default Home