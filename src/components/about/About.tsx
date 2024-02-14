import React from 'react'
import AboutText from './AboutText'
import AboutMission from './AboutMission'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <AboutText/>
        <AboutMission/>
    </div>
  )
}

export default About