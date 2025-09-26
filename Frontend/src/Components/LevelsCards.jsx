import { BookOpenText, School, School2, University } from 'lucide-react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DocumentsTypesContext } from '../Context/DocumentsTypesContext';

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
    const {toggleDocsType} = useContext(DocumentsTypesContext);
    const handleCardClick = (level) => {
        toggleDocsType(level);
    }
  return (
    <div className='py-20 flex flex-col items-center'>
        <h2 className='text-4xl font-bold dark:text-white mb-10'>المستويات</h2>
        <div className='w-[90%] lg-px-30 xl:px-50 flex flex-col gap-5 md:flex-row '>
       {
        levels.map((level,index)=>{
            return(
                <div key={index}  onClick={handleCardClick(level)}>
                <Link to="/ressources">
                <div  className='w-full bg-white dark:bg-slate-800 dark:text-white shadow-xl flex-1 py-15 px-3
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
