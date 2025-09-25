import React, { useEffect } from 'react'
import DocumentCard from './DocumentCard'
import { useContext } from 'react'
import { RessourcesContext } from '../Context/RessourcesContext'
import { LevelContext } from "../Context/LevelContext"
import { ClassContext} from "../Context/ClassContext";
import { DocumentsTypesContext } from "../Context/DocumentsTypesContext";
export default function DocumentsCards() {
     const {level} = useContext(LevelContext);
     const {classItem} = useContext(ClassContext);
     const {docsType} = useContext(DocumentsTypesContext);
     const {ressources} = useContext(RessourcesContext);
     const ressourcesFiltred = ressources.filter(ressource=>{
           return( 
             ressource.level === level 
             && ressource.type === docsType 
             && (classItem.length > 0 ? ressource.class === classItem : true)
          )
     })
     useEffect(()=>{
      ressources.forEach(r => {
  console.log({
    subject: r.subject,
    levelMatch: r.level === level,
    typeMatch: r.type === docsType,
    classMatch: classItem.length > 0 ? r.class === classItem : true
  });
});

      
     })

  return (
    <div className='flex flex-wrap gap-4 w-full'>
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
