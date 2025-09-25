import React from 'react'
import SearchBar from './SearchBar';
import StatisticsCards from './StatisticsCards';
import FloatingIcons from './FloatingIcons';

export default function Hero() {


  return (
    <section className=' font-cairo bg-light dark:bg-slate-900 '>
        <div className='relative pt-[180px] lg-mx-16 xl:mx-20 min-h-screen flex flex-col  items-center '>
           <div className='flex flex-col items-center  '>
            <h1 className='text-center font-bold dark:text-white text-5xl  sm:text-6xl md:text-7xl mb-8'>
                منصة التعلم
                <br />
                <span className='text-primary inline-block  pt-3 '>الرقمية</span>
            </h1>
            <p className=' dark:text-white text-xl md:text-2xl  text-center'>اكتشف جميع الموارد الدراسية من دروس، تمارين و امتحانات.  </p>
        </div>
        <div className='mt-10 '>
           <SearchBar />
        </div>
        <div className='mt-10'> 
          <StatisticsCards />
        </div>
        <FloatingIcons />
        </div>
    </section>

  )
}
