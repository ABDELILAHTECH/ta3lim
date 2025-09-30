import { useContext } from 'react';
import { DocumentsTypesContext } from '../Context/DocumentsTypesContext';
import { LevelContext } from '../Context/LevelContext';

export default function DocumentsTypesNav() {
  const {level} = useContext(LevelContext);
  let documentsTypes;
  if (level === "الابتدائي") {
    documentsTypes = ["الفروض","الدروس"];
  }else if(level === "الإعدادي"){
    documentsTypes = ["الفروض","التمارين","الدروس"];
  }else if(level === "الثانوي"){
    documentsTypes = ["الامتحانات","الفروض","التمارين","الدروس"];
  }else{
    documentsTypes = [];
  }
  const {docsType,toggleDocsType} = useContext(DocumentsTypesContext)
  return (
    <nav className=''>
       <ul className='flex flex-wrap gap-3'>
          {
            documentsTypes.map((type,index) =>  {
              return (
                <li key={index} onClick={() => toggleDocsType(type)} className={`border-1 border-primary px-4 py-2 md:text-xl lg:2xl rounded-lg hover:bg-primary hover:text-white  transition duration-300 ${docsType === type ? "bg-primary" : ""}`} >{type}</li>
              )
            })
          }   
       </ul>
    </nav>
  )
}
