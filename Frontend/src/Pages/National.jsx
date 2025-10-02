import React from 'react'
import { BookOpen, FileText, Clock, Users, Award, TrendingUp } from 'lucide-react'
import Footer from '../Components/Footer'

export default function National() {
  return (
    <>
      <div className='bg-light dark:bg-dark font-kufi bg-green-200 min-h-screen pt-20'>
        {/* Hero Section */}
        <div className=' text-primary w-full mt-10'>
            <h1 className='text-center text-4xl md:text-5xl font-bold mb-4'>الامتحان الوطني الموحد للبكالوريا</h1>
        </div>

        {/* Main Content */}
        <div className='mx-15'>
          {/* Quick Stats */}
          <div className='flex justify-center items-center gap-4 w-full '>
            <div className='flex gap-2 items-center px-6 py-3 '>
              <BookOpen size={20} className='text-primary' />
              <h3 className='text-sm dark:text-white '>جميع المواد المطلوبة </h3>
            </div>
            <div className='flex gap-2 items-center p-3 '>
              <FileText size={20} className='text-primary ' />
              <h3 className='text-sm dark:text-white'>الامتحانات السابقة</h3>
            </div>
            <div className='flex gap-2 items-center p-3 '>
              <TrendingUp size={20} className='text-primary mx-auto ' />
              <h3 className='text-sm dark:text-white gap-2 '>التقييم والتقدم</h3>
            </div>
          </div>

          {/* Subjects Section */}
          <div className='my-12'>
            <h2 className='text-3xl dark:text-white font-bold text-center mb-8'>المواد الدراسية</h2>
            <div className='flex flex-wrap justify-center gap-6'>
              {[
                { name: 'الرياضيات', icon: '📊', color: 'bg-blue-500' },
                { name: 'الفيزياء', icon: '⚛️', color: 'bg-purple-500' },
                { name: 'الكيمياء', icon: '🧪', color: 'bg-green-500' },
                { name: 'علوم الحياة والأرض', icon: '🌱', color: 'bg-emerald-500' },
                { name: 'اللغة العربية', icon: '📝', color: 'bg-orange-500' },
                { name: 'اللغة الفرنسية', icon: '🇫🇷', color: 'bg-indigo-500' },
                { name: 'اللغة الإنجليزية', icon: '🇬🇧', color: 'bg-red-500' },
                { name: 'التاريخ والجغرافيا', icon: '🗺️', color: 'bg-yellow-500' },
                { name: 'الفلسفة', icon: '🤔', color: 'bg-pink-500' }
              ].map((subject, index) => (
                <div key={index} className='bg-white dark:bg-slate-800 flex gap-2 px-6 py-2 rounded-3xl shadow-md hover:shadow-lg transition-shadow cursor-pointer'>
                  <div className={`w-8 h-8  ${subject.color} rounded-full flex items-center justify-center text-white text-lg `}>
                    {subject.icon}
                  </div>
                  <h3 className='text-md dark:text-white font-bold '>{subject.name}</h3>
                </div>
              ))}
            </div>
          </div>

          
          
        </div>
      </div>
      <Footer />
    </>
  )
}
