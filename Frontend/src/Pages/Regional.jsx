import React from 'react'
import { BookOpen, FileText, Clock, Users, Award, MapPin, TrendingUp } from 'lucide-react'
import Footer from '../Components/Footer'

export default function Regional() {
  return (
    <>
      <div className='bg-light dark:bg-dark dark:text-white font-cairo min-h-screen pt-20'>
        {/* Hero Section */}
        <div className=' text-primary w-full mt-20'>
            <h1 className='text-center text-4xl md:text-5xl font-bold mb-4'>الامتحان الجهوي الموحد للبكالوريا</h1>
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

          {/* Regions Section */}
          <div className='mb-12'>
            <h2 className='text-3xl font-bold text-center dark:text-white my-8'>الجهات</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {[
                { name: 'الرباط سلا القنيطرة', code: 'RSK', color: 'bg-blue-500' },
                { name: 'الدار البيضاء سطات', code: 'CBS', color: 'bg-red-500' },
                { name: 'فاس مكناس', code: 'FM', color: 'bg-green-500' },
                { name: 'مراكش آسفي', code: 'MA', color: 'bg-orange-500' },
                { name: 'طنجة تطوان الحسيمة', code: 'TTH', color: 'bg-purple-500' },
                { name: 'الشرق', code: 'E', color: 'bg-yellow-500' },
                { name: 'بني ملال خنيفرة', code: 'BK', color: 'bg-pink-500' },
                { name: 'سوس ماسة', code: 'SM', color: 'bg-indigo-500' },
                { name: 'العيون الساقية الحمراء', code: 'ASH', color: 'bg-teal-500' }
              ].map((region, index) => (
                <div key={index} className='bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer'>
                  <div className={`w-12 h-12 ${region.color} rounded-full flex items-center justify-center text-white font-bold text-lg mb-4`}>
                    {region.code}
                  </div>
                  <h3 className='text-xl dark:text-white font-bold mb-2'>{region.name}</h3>
                  <p className='text-gray-600 dark:text-gray-300 text-sm'> امتحانات </p>
                </div>
              ))}
            </div>
          </div>

          {/* Regional Subjects */}
          <div className='mb-12'>
            <h2 className='text-3xl font-bold text-center mb-8'>المواد الدراسية</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {[
                { name: 'اللغة العربية', icon: '📝', level: 'متوسط' },
                { name: 'اللغة الفرنسية', icon: '🇫🇷', level: 'متوسط' },
                { name: 'اللغة الإنجليزية', icon: '🇬🇧', level: 'متوسط' },
                { name: 'الرياضيات', icon: '📊', level: 'متوسط' },
                { name: 'الفيزياء والكيمياء', icon: '⚛️', level: 'متوسط' },
                { name: 'علوم الحياة والأرض', icon: '🌱', level: 'متوسط' },
                { name: 'التاريخ والجغرافيا', icon: '🗺️', level: 'متوسط' },
                { name: 'التربية الإسلامية', icon: '🕌', level: 'متوسط' }
              ].map((subject, index) => (
                <div key={index} className='bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer'>
                  <div className='text-3xl mb-4'>{subject.icon}</div>
                  <h3 className='text-lg  font-bold mb-2'>{subject.name}</h3>
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
