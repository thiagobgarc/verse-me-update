import React from 'react'
import { motion } from 'framer-motion'

const Button = ({button}: {button: string}) => {
  return (
    <motion.div initial={{ y: 0, opacity: 0 }} animate={{ y:40, opacity: 1 }} transition={{ duration: .7 }} className='flex flex-col items-center justify-center absolute inset-0 mt-[13rem]'>
        <a href='/search'>
            <button className='text-[#000000] border-solid border-[.25rem] border-[#000000] border-padding px-2 py-1 shadow-2xl shadow-[#000000] transition-shadow ease-in-out rounded text-xl text-bolder transform hover:scale-105'>
                {button}
            </button>
        </a>
    </motion.div>
  )
}

export default Button