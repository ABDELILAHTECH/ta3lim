import { BookOpenText, School, School2, University } from 'lucide-react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LevelContext } from '../Context/LevelContext';

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
    const {toggleLevel} = useContext(LevelContext);
    const handleCardClick = (level) => {
        toggleLevel(level);
        window.scrollTo(0, 0);
    }
  return (
    <div className='py-20 flex flex-col items-center'>
        <h2 className='text-4xl font-bold dark:text-white mb-10'>المستويات</h2>
        <div className='w-[90%] sm:w-[80%] lg:w-[70%] xl:w-[60%] flex flex-col justify-center gap-5 md:flex-row '>
       {
        levels.map((level,index)=>{
            return(
                <div key={index}  onClick={()=>handleCardClick(level.title)}>
                <Link to="/ressources" className=''>
                <div  className='px-7 bg-white dark:bg-slate-800 dark:text-white shadow-xl flex-1 py-15
                     rounded flex flex-col items-center gap-4  hover:scale-101 transition duration-500
                     cursor-pointer '>
                    <div className='rounded-full bg-primary p-3'>
                        <level.icon size={50} />
                    </div>
                    <h3 className='font-bold text-3xl '>{level.title}</h3>
                    <p className='text-center'> 
                      استكشف مواردنا للمستوى {level.title} 
                    </p>
                </div>
                </Link>
                </div>
            )
        })
       }
    </div>
    </div>
    
  )
}
