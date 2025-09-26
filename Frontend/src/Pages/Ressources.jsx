import React from 'react'
import LevelsNav from '../Components/LevelsNav'
import ClassNav from '../Components/ClassNav'
import DocumentsCards from '../Components/DocumentsCards'
import DocumentsTypesNav from '../Components/DocumentsTypesNav'

export default function ContentPage() {
  return (
    <div className='bg-light dark:bg-slate-900 min-h-screen px-6 py-5  md:px-12 lg-px-16 xl:px-20 text-black dark:text-white font-kufi pt-30'>
        <div className=''>
          <LevelsNav />
        </div>
        <div className='flex flex-col lg:flex-row gap-4  w-full my-8'>
            <div className=''>
                <ClassNav />
                <DocumentsTypesNav />
            </div>
            <DocumentsCards />
        </div>
    </div>
  )
}
