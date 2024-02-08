import React from 'react'
import { motion } from 'framer-motion'

const ContactText = () => {
  return (
    <motion.div className='flex flex-col items-center justify-center mt-[3rem] space-y-4' initial={{ y: 0, opacity: 0 }} animate={{ y:25, opacity: 1 }} transition={{ duration: .6 }}>
        <h1 className='text-3xl text-center'>Contact Us</h1>
        <p className='text-xl text-center'>We would love to hear from you! Fill out the form below and we will get back to you as soon as possible.</p>
    </motion.div>
  )
}

export default ContactText