import React from 'react'
import Card from './Card'
import { motion } from 'framer-motion'
import myImage from '../../../public/instagram.jpeg'

const ContactIntro = ({text}: {text: string}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-10 space-x-3">
        <motion.h3 className='text-2xl font-bold mb-4'
        initial={{ y: 0, opacity: 0 }} animate={{ y:25, opacity: 1 }} transition={{ duration: .5 }}>
            {text}
        </motion.h3>
        <div className="grid grid-cols-2 gap-4">
        <Card title='Instagram' content='../../../public/instagram-1.svg' text='Coming soon'/>
        <Card title='Twitter' content='../../../public/twitter.svg' text='Coming soon'/>
        <Card title='Facebook' content='../../../public/facebook.svg' text='Coming soon'/>
        <Card title='Youtube' content='../../../public/youtube.svg' text='Coming soon'/>
        </div>
        
    </div>
  )
}

export default ContactIntro