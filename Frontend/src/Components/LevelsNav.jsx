import React from 'react'
import { useContext } from 'react'
import { LevelContext } from '../Context/LevelContext'

export default function LevelsNav() {
  const levels = ["الابتدائي","الإعدادي","الثانوي"]
  const {level,toggleLevel} = useContext(LevelContext);


  return (
    <nav className='w-full lg:w-[70%]'>
            <ul className='flex justify-center'>
                {
                    levels.map((levelItem,index)=>{
                        return(
                            <li key={index} onClick={() => toggleLevel(levelItem)} className={`text-lg text-center md:text-2xl py-2  flex-1 cursor-pointer ${levelItem === level ? "border-b-4 border-primary text-primary dark:border-"  : ""} `}>{levelItem}</li>
                        )
                    })
                }
            </ul>
        </nav>
  )
}
