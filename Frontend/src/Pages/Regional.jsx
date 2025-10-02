import React, { useContext, useState, useMemo } from 'react'
import { BookOpen, FileText, TrendingUp, Heart, Download, ArrowUpRight, X, Check } from 'lucide-react'
import Footer from '../Components/Footer'
import { regionalExams } from '../RegionalExams'
import { FavoritesContext } from '../Context/FavoritesContext'
import { RegionContext } from '../Context/RegionContext'
import { CompletedExamsContext } from '../Context/CompletedExamsContext'

export default function Regional() {
    const {favorites,addToFavorites,removeFromFavorites} = useContext(FavoritesContext);
    const {selectedRegion, selectedSubject, toggleRegion, toggleSubject, clearFilters} = useContext(RegionContext);
    const {toggleCompleted, isCompleted} = useContext(CompletedExamsContext);
    
    const favoriteBtnHandleClick = (ressource) => {
      const isFavorite = favorites.some(fav => fav.title === ressource.title);
      if (isFavorite) {
         removeFromFavorites(ressource);
      } else {
         addToFavorites(ressource);
      }
    }

    // Fonction pour extraire la région du titre de l'examen
    const extractRegionFromTitle = (title) => {
        const regions = [
            { search: 'الرباط-سلا-القنيطرة', display: 'الرباط سلا القنيطرة' },
            { search: 'الدار-البيضاء-سطات', display: 'الدار البيضاء سطات' },
            { search: 'فاس-مكناس', display: 'فاس مكناس' },
            { search: 'مراكش-آسفي', display: 'مراكش آسفي' },
            { search: 'طنجة-تطوان-الحسيمة', display: 'طنجة تطوان الحسيمة' },
            { search: 'الشرق', display: 'الشرق' },
            { search: 'بني-ملال-خنيفرة', display: 'بني ملال خنيفرة' },
            { search: 'سوس-ماسة', display: 'سوس ماسة' },
            { search: 'العيون-الساقية-الحمراء', display: 'العيون الساقية الحمراء' }
        ];
        
        for (const region of regions) {
            if (title.includes(region.search)) {
                return region.display;
            }
        }
        return null;
    };

    // Fonction pour extraire le sujet du titre de l'examen
    const extractSubjectFromTitle = (title) => {
        const subjects = [
            { search: 'التاريخ-والجغرافيا', display: 'التاريخ والجغرافيا' },
            { search: 'التربية-الإسلامية', display: 'التربية الإسلامية' },
            { search: 'الرياضيات', display: 'الرياضيات' },
            { search: 'اللغة-العربية', display: 'اللغة العربية' },
            { search: 'اللغة-الفرنسية', display: 'اللغة الفرنسية' }
        ];
        
        for (const subject of subjects) {
            if (title.includes(subject.search)) {
                return subject.display;
            }
        }
        return null;
    };

    // Filtrer les examens basé sur la région et le sujet sélectionnés
    const filteredExams = useMemo(() => {
        const filtered = regionalExams.filter(exam => {
            const examRegion = extractRegionFromTitle(exam.title);
            const examSubject = extractSubjectFromTitle(exam.title);
            
            const regionMatch = !selectedRegion || examRegion === selectedRegion;
            const subjectMatch = !selectedSubject || examSubject === selectedSubject;
            
            // Debug: log pour les premiers examens
            if (exam === regionalExams[0]) {
                console.log('Debug - Premier examen:', {
                    title: exam.title,
                    examRegion,
                    examSubject,
                    selectedRegion,
                    selectedSubject,
                    regionMatch,
                    subjectMatch
                });
            }
            
            return regionMatch && subjectMatch;
        });
        
        console.log('Debug - Filtrage:', {
            total: regionalExams.length,
            filtered: filtered.length,
            selectedRegion,
            selectedSubject
        });
        
        return filtered;
    }, [selectedRegion, selectedSubject]);
  return (
    <>
      <div className='bg-light dark:bg-dark dark:text-white font-cairo min-h-screen py-20'>
        {/* Hero Section */}
        <div className=' text-primary w-full mt-10'>
            <h1 className='text-center text-4xl md:text-5xl font-bold mb-4'>الامتحان الجهوي الموحد للبكالوريا</h1>
        </div>

        {/* Main Content */}
        <div className=' mx-15  '>
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
               <div 
                 key={index} 
                 onClick={() => toggleRegion(region.name)}
                 className={`px-6 py-2 rounded-3xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2 ${
                   selectedRegion === region.name 
                     ? 'bg-primary text-white' 
                     : 'bg-white dark:bg-slate-800 dark:text-white'
                 }`}
               >
                  <h3 className='text-md font-bold'> جهة {region.name}  </h3>
                  {selectedRegion === region.name && (
                    <X 
                      size={16} 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleRegion('');
                      }}
                      className="hover:bg-white/20 rounded-full p-1"
                    />
                  )}
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
                <div 
                  key={index} 
                  onClick={() => toggleSubject(subject.name)}
                  className={`flex items-center gap-2 px-6 py-2 rounded-3xl shadow-md hover:shadow-lg transition-all cursor-pointer ${
                    selectedSubject === subject.name 
                      ? 'bg-primary text-white' 
                      : 'bg-white dark:bg-slate-800 dark:text-white'
                  }`}
                >
                  <div className='text-Xl '>{subject.icon}</div>
                  <h3 className='text-md font-bold '>{subject.name}</h3>
                  {selectedSubject === subject.name && (
                    <X 
                      size={16} 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSubject('');
                      }}
                      className="hover:bg-white/20 rounded-full p-1"
                    />
                  )}
                </div>
              ))}
            </div>
         </div> 

         {/* Filtres actifs */}
         {(selectedRegion || selectedSubject) && (
           <div className='mb-8 flex flex-wrap justify-center gap-4'>
             <div className='bg-primary text-white px-4 py-2 rounded-full flex items-center gap-2'>
               <span>فلاتر نشطة:</span>
               {selectedRegion && (
                 <span className='bg-white/20 px-2 py-1 rounded-full text-sm'>
                   جهة {selectedRegion}
                 </span>
               )}
               {selectedSubject && (
                 <span className='bg-white/20 px-2 py-1 rounded-full text-sm'>
                   {selectedSubject}
                 </span>
               )}
               <button 
                 onClick={clearFilters}
                 className='bg-white/20 hover:bg-white/30 px-2 py-1 rounded-full text-sm transition-colors'
               >
                 مسح الكل
               </button>
             </div>
           </div>
         )}

         {/* Résultats */}
         <div className='mb-4 text-center'>
           <p className='text-gray-600 dark:text-gray-400'>
             عرض {filteredExams.length} من {regionalExams.length} امتحان
           </p>
         </div>

         {/* Message si aucun résultat */}
         {filteredExams.length === 0 && (selectedRegion || selectedSubject) && (
           <div className='text-center py-8'>
             <p className='text-gray-500 dark:text-gray-400 text-lg'>
               لا توجد امتحانات تطابق الفلاتر المحددة
             </p>
             <button 
               onClick={clearFilters}
               className='mt-4 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors'
             >
               مسح الفلاتر
             </button>
           </div>
         )}

          <div className='flex flex-col gap-2 lg:px-60 px-4'>
            {filteredExams.map((exam, index) => (
              <div key={index} className={`bg-white dark:bg-slate-800 flex justify-between items-center gap-2 px-8 py-4 rounded-lg shadow-lg hover:shadow-lg transition-all cursor-pointer ${
                isCompleted(exam.title) ? 'border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20' : ''
              }`}> 
                <div className='flex items-center gap-3'>
                  <button 
                    onClick={() => toggleCompleted(exam.title)}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      isCompleted(exam.title) 
                        ? 'bg-green-500 border-green-500 text-white' 
                        : 'border-gray-300 dark:border-gray-600 hover:border-green-500'
                    }`}
                  >
                    {isCompleted(exam.title) && <Check size={14} />}
                  </button>
                  <h3 className={`text-md font-bold dark:text-white ${isCompleted(exam.title) ? 'line-through text-gray-500 dark:text-gray-400' : ''}`}>
                    {exam.title}
                  </h3>
                </div>
                <div className='flex gap-4'>
                  <a href={exam.fileUrl} target='_blank'>
                    <ArrowUpRight className='hover:text-primary transition' />
                  </a>
                  <button onClick={() => favoriteBtnHandleClick(exam)}>
                      <Heart fill={favorites.some(fav => fav.title === exam.title) ? "#4F9DFF" : "none"} color={"#4F9DFF"} />
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
