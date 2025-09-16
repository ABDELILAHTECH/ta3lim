import { BookOpenText, School, School2, University } from 'lucide-react'
import React from 'react'

export default function LevelsCards() {
    const levels =[
        {
          icon:BookOpenText,  
          title:"الابتدائي",
        },
        {
          icon: School,  
          title: "الإعدادي",
        },
        {
          icon: University,  
          title: "الثانوي",
        },
    ]
  return (
    <div className='w-[90%] lg:w-full lg:px-50 flex flex-col m-auto gap-5 py-15  md:flex-row items-center justify-center'>
       <h2 className='text-4xl font-bold dark:text-white mb-7'>المستويات</h2>
       {
        levels.map((level,index)=>{
            return(
                <div key={index} className='w-full bg-slate-100 dark:bg-slate-800 dark:text-white shadow-xl  py-15 px-3
                     rounded flex flex-col items-center gap-4  hover:scale-105 transition duration-500'>
                    <div className='rounded-full bg-primary p-3'>
                        <level.icon size={50} />
                    </div>
                    <h3 className='font-bold text-3xl '>{level.title}</h3>
                    <p className='text-center'> 
                      استكشف دروسنا للمستوى {level.title} 
                    </p>
                </div>
            )
        })
       }
    </div>
  )
}
