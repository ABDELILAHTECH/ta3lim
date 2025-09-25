import { Search } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { RessourcesContext } from '../Context/RessourcesContext'
import SearchDocumentCard from './SearchDocumentCard';

export default function SearchBar() {
  const {ressources} = useContext(RessourcesContext);
  const [searchTerm,setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }
   const results = searchTerm
  ? ressources.filter((ressource) => 
      (ressource.title || "").toLowerCase().includes(searchTerm)     
    )
  : [];

  return (
    <div>
       <form action="" className='bg-white dark:bg-slate-900 border-1  border-slate-900 dark:border-white  dark:text-white flex items-center gap-2 px-6 sm:w-100 py-4 rounded-4xl hover:border-2 focus-within:border-2'>
           <Search />
           <input onChange={handleSearch} type="text" className='focus:outline-none text-xl font-cairo' placeholder="دروس، تمارين، امتحانات" />
                
       </form>
       <ul>
              {
               results.map(result=><SearchDocumentCard ressource={result} />)
              }
       </ul> 
    </div>
  )
}
