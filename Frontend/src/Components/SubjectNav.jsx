import { useContext } from 'react';
import { SubjectContext } from '../Context/SubjectContext';

export default function SubjectNav() {
  const subjects = ["الرياضيات", "الفيزياء", "علوم الحياة و الأرض", "الانجليزية", "اللغة العربية", "اللغة الفرنسية"];
  const {subject, toggleSubject} = useContext(SubjectContext);
  
  return (
    <nav className='mt-6'>
       <h3 className='text-lg font-semibold mb-3 text-primary dark:text-primary-light'>المواد</h3>
       <ul className='flex-wrap flex lg:flex-col gap-3'>
          {
            subjects.map((subjectItem, index) => {
              return (
                <li 
                  key={index} 
                  onClick={() => toggleSubject(subjectItem === subject ? "" : subjectItem)} 
                  className={`border-1 border-primary px-4 py-2 md:text-xl lg:2xl rounded-lg hover:bg-primary hover:text-white transition duration-300 cursor-pointer ${
                    subject === subjectItem ? "bg-primary text-white" : ""
                  }`}
                >
                  {subjectItem}
                </li>
              )
            })
          }   
       </ul>
    </nav>
  )
}
