import { Search } from 'lucide-react'
import React from 'react'

export default function SearchBar() {
  return (
    <form action="" className='bg-white dark:bg-slate-900 border-1  border-slate-900 dark:border-white  dark:text-white flex items-center gap-2 px-6 sm:w-100 py-4 rounded-4xl hover:border-2 focus-within:border-2'>
        <Search />
        <input type="text" className='focus:outline-none text-xl font-cairo' placeholder="دروس، تمارين، امتحانات" />
    </form>
  )
}
