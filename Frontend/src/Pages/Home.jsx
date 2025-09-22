import React from 'react'
import Hero from '../Components/Hero'
import LevelsCards from '../Components/LevelsCards'

export default function Home() {
  return (
    <div className='font-cairo'>
       <Hero />
       <div className='bg-primary dark:bg-dark'>
         <LevelsCards />
       </div>
       
    </div>
  )
}
