import React from 'react'
import Card from './Card'
import { motion } from 'framer-motion'
import myImage from '../../../public/instagram.jpeg'

const ContactIntro = ({text}: {text: string}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-10">
        <motion.h3 className='text-2xl font-bold mb-4'
        initial={{ y: 0, opacity: 0 }} animate={{ y:25, opacity: 1 }} transition={{ duration: .5 }}>
            {text}
        </motion.h3>
        <div className="grid grid-cols-2 gap-4">
        <Card title='Instagram' content='../../../public/instagram.jpeg'/>
        <Card title='Twitter' content='@verse_me_update'/>
        <Card title='Facebook' content='@verse.me.update'/>
        <Card title='Youtube' content='@VerseMeUpdate'/>
        </div>
        
    </div>
  )
}

export default ContactIntro