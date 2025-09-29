import React, { useEffect } from 'react'
import DocumentCard from './DocumentCard'
import { useContext } from 'react'
import { RessourcesContext } from '../Context/RessourcesContext'
import { LevelContext } from "../Context/LevelContext"
import { ClassContext} from "../Context/ClassContext";
import { DocumentsTypesContext } from "../Context/DocumentsTypesContext";
import { SubjectContext } from "../Context/SubjectContext";
export default function DocumentsCards() {
     const {level} = useContext(LevelContext);
     const {classItem} = useContext(ClassContext);
     const {docsType} = useContext(DocumentsTypesContext);
     const {subject} = useContext(SubjectContext);
     const {ressources} = useContext(RessourcesContext);
     const ressourcesFiltred = ressources.filter(ressource=>{
           return( 
             ressource.level === level 
             && ressource.type === docsType 
             && (classItem.length > 0 ? ressource.class === classItem : true)
             && (subject.length > 0 ? ressource.subject === subject : true)
          )
     })
     useEffect(()=>{
      ressources.forEach(r => {
  console.log({
    subject: r.subject,
    levelMatch: r.level === level,
    typeMatch: r.type === docsType,
    classMatch: classItem.length > 0 ? r.class === classItem : true,
    subjectMatch: subject.length > 0 ? r.subject === subject : true
  });
});

      
     })

  return (
    <div className='flex items-start flex-wrap gap-4 h-fit w-full'>
        {
          ressourcesFiltred.map((ressource,index)=>{
            return(
               <DocumentCard  key={index} ressource={ressource} />
            )
          })
        }
    </div>
  )
}
