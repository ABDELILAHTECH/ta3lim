import { useContext } from 'react';
import { SubjectContext } from '../Context/SubjectContext';
import { LevelContext } from '../Context/LevelContext';
export default function SubjectNav() {
  const {level} = useContext(LevelContext);
  let subjects;
  if (level === "الابتدائي") {
     subjects = ["الرياضيات", "النشاط العلمي", "التربية الإسلامية", "الاجتماعيات", "اللغة العربية", "اللغة الفرنسية"];
  }else if(level === "الإعدادي"){
       subjects = ["الرياضيات","التربية الإسلامية","الفيزياء و الكمياء", "علوم الحياة و الأرض", "الانجليزية","الاجتماعيات", "اللغة العربية", "اللغة الفرنسية"];

  }else if(level === "الثانوي"){
       subjects = ["الرياضيات","الفلسفة","التربية الإسلامية","الفيزياء و الكمياء", "علوم الحياة و الأرض", "الانجليزية","الاجتماعيات", "اللغة العربية", "اللغة الفرنسية"];

  }else{
       subjects = []
  }
  const {subject, toggleSubject} = useContext(SubjectContext);

  
  return (
    <nav className=''>
       <h3 className='text-lg font-semibold mb-3 text-primary dark:text-primary-light'>المواد</h3>
       <ul className='flex flex-wrap lg:flex-col lg:w-50 gap-3'>
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
