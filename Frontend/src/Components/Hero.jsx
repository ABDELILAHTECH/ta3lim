import React from 'react'
import SearchBar from './SearchBar';
import StatisticsCards from './StatisticsCards';
import { BookOpen, Users, Award, TrendingUp, Download } from 'lucide-react';


export default function Hero() {


  return (
    <section className=' font-cairo bg-light dark:bg-slate-900 '>
        <div className='relative pt-[120px] lg-mx-16 xl:mx-20 min-h-screen flex flex-col  items-center '>
           <div className='flex flex-col items-center  '>
             <p className='text-primary font-kufi font-bold text-3xl sm:text-4xl lg:text-5xl w-[80%] md:w-[70%] lg:w-[60%] text-center leading-relaxed'>
              مهمتنا توفير جميع الموارد الدراسية التي ستحتاجها في رحلتك الدراسية
             </p>
           </div>
         <div className='flex flex-wrap justify-center gap-6 mt-6'>
            <div className='flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm'>
              <Users size={20} className='text-primary' />
              <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>جميع المستويات</span>
            </div>
            <div className='flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm'>
              <Download size={20} className='text-primary' />
              <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>جاهزة لتحميل</span>
            </div>
            <div className='flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm'>
              <Award size={20} className='text-primary' />
              <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>مواد عالية الجودة</span>
            </div>
            <div className='flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm'>
              <TrendingUp size={20} className='text-primary' />
              <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>تحديث مستمر</span>
            </div>
          </div>  
        <div className='mt-10 w-[90%] sm:w-[80%] lg:w-[70%] xl:w-[60%] '>
           <SearchBar />
        </div>
        <div className='mt-10 w-[90%] sm:w-[80%] lg:w-[70%] xl:w-[60%] '> 
          <StatisticsCards />
        </div>
        </div>
    </section>

  )
}
