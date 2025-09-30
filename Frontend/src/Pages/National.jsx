import React from 'react'
import { BookOpen, FileText, Clock, Users, Award, TrendingUp } from 'lucide-react'
import Footer from '../Components/Footer'

export default function National() {
  return (
    <>
      <div className='bg-light dark:bg-dark font-kufi min-h-screen pt-20'>
        {/* Hero Section */}
        <div className=' text-primary w-full mt-20'>
            <h1 className='text-center text-4xl md:text-5xl font-bold mb-4'>الامتحان الوطني الموحد للبكالوريا</h1>
        </div>

        {/* Main Content */}
        <div className='container mx-auto px-4 py-12'>
          {/* Quick Stats */}
          <div className='flex justify-center items-center gap-4 w-full '>
            <div className='bg-white flex gap-2 dark:bg-slate-800 p-3 rounded-lg shadow-md text-center'>
              <BookOpen size={28} className='text-primary mx-auto' />
              <h3 className='text-xl dark:text-white  font-bold mb-2'>جميع المواد المطلوبة </h3>
            </div>
            <div className='bg-white flex gap-2 dark:bg-slate-800 p-3 rounded-lg shadow-md text-center'>
              <FileText size={28} className='text-primary mx-auto ' />
              <h3 className='text-xl dark:text-white font-bold mb-2'>الامتحانات السابقة</h3>
            </div>
            <div className='bg-white flex gap-2 dark:bg-slate-800 p-3 rounded-lg shadow-md text-center'>
              <TrendingUp size={28} className='text-primary mx-auto ' />
              <h3 className='text-xl dark:text-white gap-2 font-bold mb-2'>التقييم والتقدم</h3>
            </div>
          </div>

          {/* Subjects Section */}
          <div className='my-12'>
            <h2 className='text-3xl dark:text-white font-bold text-center mb-8'>المواد الدراسية</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
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
                <div key={index} className='bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer'>
                  <div className={`w-12 h-12  ${subject.color} rounded-full flex items-center justify-center text-white text-2xl mb-4`}>
                    {subject.icon}
                  </div>
                  <h3 className='text-xl dark:text-white font-bold mb-2'>{subject.name}</h3>
                  <p className='text-gray-600 dark:text-gray-300 text-sm'>امتحانات</p>
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
