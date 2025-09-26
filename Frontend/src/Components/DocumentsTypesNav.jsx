import { useContext } from 'react';
import { DocumentsTypesContext } from '../Context/DocumentsTypesContext';

export default function DocumentsTypesNav() {
  const documentsTypes = ["الدروس","التمارين","الامتحانات","الفروض"];
  const {docsType,toggleDocsType} = useContext(DocumentsTypesContext)
  return (
    <nav className='mt-6'>
       <ul className='flex-wrap flex lg:flex-col gap-3'>
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
