import React from 'react'
import ContactText from './Contact-Text'
import ContactForm from './Contact-Form'
import ContactIntro from './Contact-Intro'

const Contact = () => {
  return (
    <div className='flex flex-col pb-4'>
        <ContactIntro text='Follow us on social media'/>
        <ContactText/>
        <ContactForm/>
    </div>
  )
}

export default Contact