import React from 'react'
import Hero from '../Components/Hero'
import LevelsCards from '../Components/LevelsCards'

export default function Home() {
  return (
    <div className='bg-light dark:bg-dark font-cairo'>
       <Hero />
       <div className=''>
         <LevelsCards />
       </div>
       
    </div>
  )
}
