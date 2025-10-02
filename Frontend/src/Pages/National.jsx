import React, { useContext, useMemo } from 'react'
import { BookOpen, FileText, Clock, Users, Award, TrendingUp, Heart, ArrowUpRight, X, Check } from 'lucide-react'
import Footer from '../Components/Footer'
import { nationalExams } from '../NationalExams'
import { FavoritesContext } from '../Context/FavoritesContext'
import { RegionContext } from '../Context/RegionContext'
import { CompletedExamsContext } from '../Context/CompletedExamsContext'
export default function National() {
  const {favorites, addToFavorites, removeFromFavorites} = useContext(FavoritesContext);
  const {selectedSubject, toggleSubject, clearFilters} = useContext(RegionContext);
  const {toggleCompleted, isCompleted} = useContext(CompletedExamsContext);
  
  const favoriteBtnHandleClick = (ressource) => {
    const isFavorite = favorites.some(fav => fav.title === ressource.title);
    if (isFavorite) {
       removeFromFavorites(ressource);
    } else {
       addToFavorites(ressource);
    }
  }

  // Fonction pour extraire le sujet du titre de l'examen national
  const extractSubjectFromTitle = (title) => {
    const subjects = [
      { search: 'التاريخ-والجغرافيا', display: 'التاريخ والجغرافيا' },
      { search: 'التربية-الإسلامية', display: 'التربية الإسلامية' },
      { search: 'الرياضيات', display: 'الرياضيات' },
      { search: 'اللغة-العربية', display: 'اللغة العربية' },
      { search: 'اللغة-الفرنسية', display: 'اللغة الفرنسية' },
      { search: 'اللغة-الإنجليزية', display: 'اللغة الإنجليزية' },
      { search: 'الفيزياء-والكيمياء', display: 'الفيزياء والكمياء' },
      { search: 'علوم-الحياة-والارض', display: 'علوم الحياة والأرض' },
      { search: 'الفلسفة', display: 'الفلسفة' }
    ];
    
    for (const subject of subjects) {
      if (title.includes(subject.search)) {
        return subject.display;
      }
    }
    return null;
  };

  // Filtrer les examens basé sur le sujet sélectionné
  const filteredExams = useMemo(() => {
    return nationalExams.filter(exam => {
      const examSubject = extractSubjectFromTitle(exam.title);
      const subjectMatch = !selectedSubject || examSubject === selectedSubject;
      return subjectMatch;
    });
  }, [selectedSubject]);

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
                { name: 'الفيزياء والكمياء', icon: '⚛️', color: 'bg-purple-500' },
                { name: 'علوم الحياة والأرض', icon: '🌱', color: 'bg-emerald-500' },
                { name: 'اللغة العربية', icon: '📝', color: 'bg-orange-500' },
                { name: 'اللغة الإنجليزية', icon: '🇬🇧', color: 'bg-red-500' },
                { name: 'التاريخ والجغرافيا', icon: '🗺️', color: 'bg-yellow-500' },
                { name: 'الفلسفة', icon: '🤔', color: 'bg-pink-500' }
              ].map((subject, index) => (
                <div 
                  key={index} 
                  onClick={() => toggleSubject(subject.name)}
                  className={`flex gap-2 px-6 py-2 rounded-3xl shadow-md hover:shadow-lg transition-all cursor-pointer ${
                    selectedSubject === subject.name 
                      ? 'bg-primary text-white' 
                      : 'bg-white dark:bg-slate-800 dark:text-white'
                  }`}
                >
                  <div className={`w-8 h-8 ${subject.color} rounded-full flex items-center justify-center text-white text-lg`}>
                    {subject.icon}
                  </div>
                  <h3 className='text-md font-bold'>{subject.name}</h3>
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
          {selectedSubject && (
            <div className='mb-8 flex flex-wrap justify-center gap-4'>
              <div className='bg-primary text-white px-4 py-2 rounded-full flex items-center gap-2'>
                <span>فلتر نشط:</span>
                <span className='bg-white/20 px-2 py-1 rounded-full text-sm'>
                  {selectedSubject}
                </span>
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
              عرض {filteredExams.length} من {nationalExams.length} امتحان
            </p>
          </div>

          {/* Message si aucun résultat */}
          {filteredExams.length === 0 && selectedSubject && (
            <div className='text-center py-8'>
              <p className='text-gray-500 dark:text-gray-400 text-lg'>
                لا توجد امتحانات تطابق الفلتر المحدد
              </p>
              <button 
                onClick={clearFilters}
                className='mt-4 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors'
              >
                مسح الفلتر
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
                    <ArrowUpRight className='dark:text-white hover:text-primary transition' />
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
