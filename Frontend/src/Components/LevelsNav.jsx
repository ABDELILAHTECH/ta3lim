import React from 'react'
import { useContext } from 'react'
import { LevelContext } from '../Context/LevelContext'

export default function LevelsNav() {
  const levels = ["الابتدائي","الإعدادي","الثانوي"]
  const {level,toggleLevel} = useContext(LevelContext);


  return (
    <nav className='w-full bg-primary rounded-4xl'>
            <ul className='flex justify-center'>
                {
                    levels.map((levelItem,index)=>{
                        return(
                            <li key={index} onClick={() => toggleLevel(levelItem)} className={`text-lg text-center md:text-2xl lg:text-3xl  py-2 rounded-4xl flex-1 cursor-pointer border-1 border-primary   ${levelItem === level ? "bg-white dark:bg-dark "  : ""} `}>{levelItem}</li>
                        )
                    })
                }
            </ul>
        </nav>
  )
}
