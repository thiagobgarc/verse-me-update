import React from 'react'
import Button from '../Button'
import { motion } from 'framer-motion'

const ContactForm = () => {
  return (
    <motion.div className='flex flex-col items-center justify-center mt-[5rem]' initial={{ y: 0, opacity: 0 }} animate={{ y:25, opacity: 1 }} transition={{ duration: .8 }}>
        <form action="/contact" method="post" className='flex flex-col items-center justify-center space-y-4'>

                <input type="text" id="name" name="name" required placeholder='Your Name' className='border-2 border-black rounded px-5 py-1' maxLength={50}/>
            
            
                <input type="email" id="email" name="email" required placeholder='Your Email' className='border-2 border-black rounded px-5 py-1' maxLength={50}/>
            
            
            <textarea id="message" name="message" required placeholder='Your Message' className='h-[9rem] border-2 border-black rounded pt-2 px-5' maxLength={500} />
            <button type="submit" className='text-[#000000] border-solid border-[.25rem] border-[#000000] border-padding px-2 py-1 shadow-2xl shadow-[#000000] transition-shadow ease-in-out rounded text-xl text-bolder transform hover:scale-105'>Submit</button>
        </form>
    </motion.div>
  )
}

export default ContactForm