import React, { useContext } from 'react'
import { BookOpen, FileText, TrendingUp, Heart, Download, ArrowUpRight } from 'lucide-react'
import Footer from '../Components/Footer'
import { regionalExams } from '../RegionalExams'
import { FavoritesContext } from '../Context/FavoritesContext'

export default function Regional() {
    const {favorites,addToFavorites,removeFromFavorites} = useContext(FavoritesContext);
    const favoriteBtnHandleClick = (ressource) => {
      const isFavorite = favorites.some(fav => fav.title === ressource.title);
      if (isFavorite) {
         removeFromFavorites(ressource);
      } else {
         addToFavorites(ressource);
  }
  }
  return (
    <>
      <div className='bg-light dark:bg-dark dark:text-white font-cairo min-h-screen py-20'>
        {/* Hero Section */}
        <div className=' text-primary w-full mt-20'>
            <h1 className='text-center text-3xl md:text-4xl font-bold mb-4'>الامتحان الجهوي الموحد للبكالوريا</h1>
        </div>

        {/* Main Content */}
        <div className=' mx-15 px-4 '>
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

          {/* Regions Section */}
          <div className='mb-12'>
            <h2 className='text-3xl font-bold text-center dark:text-white my-8'>الجهات</h2>
            <div className='flex flex-wrap justify-center gap-6'>
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
               <div key={index} className='bg-white dark:bg-slate-800 px-6 py-2 rounded-3xl shadow-md hover:shadow-lg transition-shadow cursor-pointer'>
                  <h3 className='text-md dark:text-white font-bold'> جهة {region.name}  </h3>
                </div> 
              ))}
            </div>
          </div>

          {/* Regional Subjects */}
          <div className='mb-12'>
            <h2 className='text-3xl font-bold text-center mb-8'>المواد الدراسية</h2>
            <div className='flex flex-wrap justify-center gap-6'>
              {[
                { name: 'اللغة العربية', icon: '📝', level: 'متوسط' },
                { name: 'اللغة الفرنسية', icon: '🇫🇷', level: 'متوسط' },
                { name: 'الرياضيات', icon: '📊', level: 'متوسط' },     
                { name: 'التاريخ والجغرافيا', icon: '🗺️', level: 'متوسط' },
                { name: 'التربية الإسلامية', icon: '🕌', level: 'متوسط' }
              ].map((subject, index) => (
                <div key={index} className='bg-white dark:bg-slate-800 flex items-center gap-2 px-6 py-2 rounded-3xl shadow-md hover:shadow-lg transition-shadow cursor-pointer'>
                  <div className='text-Xl '>{subject.icon}</div>
                  <h3 className='text-md font-bold '>{subject.name}</h3>
                </div>
              ))}
            </div>
         </div> 
          <div className='flex flex-col gap-2 lg:px-60 px-4'>
            {regionalExams.map((exam, index) => (
              <div key={index} className='bg-white dark:bg-slate-800 flex justify-between items-center gap-2 px-8 py-4 rounded-lg shadow-lg hover:shadow-lg transition-shadow cursor-pointer'> 
                <h3 className='text-md font-bold '>{exam.title}</h3>
                <div className='flex gap-4'>
                  <a href={exam.fileUrl} target='_blank'>
                    <ArrowUpRight className='hover:text-primary transition' />
                  </a>
                  <button onClick={() => favoriteBtnHandleClick(exam)}>
                      <Heart />
                  </button>
                </div>
              </div>
            ))}
          
          </div>
         
          
        </div>
      </div>
      <Footer />
    </>
  )
}
