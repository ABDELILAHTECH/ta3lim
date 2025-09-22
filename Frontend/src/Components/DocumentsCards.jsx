import React from 'react'
import DocumentCard from './DocumentCard'
import { useContext } from 'react'
import { RessourcesContext } from '../Context/RessourcesContext'

export default function DocumentsCards() {

     const {ressources} = useContext(RessourcesContext);

  return (
    <div className='flex flex-wrap gap-4 '>
        {
          ressources.map((ressource)=>{
            return(
               <DocumentCard  ressource={ressource} />
            )
          })
        }
    </div>
  )
}
