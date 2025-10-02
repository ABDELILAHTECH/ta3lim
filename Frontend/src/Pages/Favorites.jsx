import React, { useContext, useEffect, useState } from 'react'
import { FavoritesContext } from '../Context/FavoritesContext'
import { CompletedExamsContext } from '../Context/CompletedExamsContext'
import DocumentCard from '../Components/DocumentCard'
import { ChevronDown, ChevronUp, Trash2, Heart, CheckCircle, AlertCircle } from 'lucide-react'
import Footer from '../Components/Footer.jsx';

export default function Favorites() {
  const { favorites, clearFavorites } = useContext(FavoritesContext);
  const { completedExams, clearCompleted } = useContext(CompletedExamsContext);
  const [showResetModal, setShowResetModal] = useState(false);
  
  useEffect(()=>{
    console.log(favorites);
  }, [favorites])

  const handleResetAll = () => {
    clearFavorites();
    clearCompleted();
    setShowResetModal(false);
  }

  const favoritesLessons = favorites.filter(fav => fav.type === "الدروس");
  const favoritesExercises = favorites.filter(fav => fav.type === "التمارين");
  const favoritesMorakaba = favorites.filter(fav => fav.type === "المراقبة المستمرة");
  const favoritesExams = favorites.filter(fav => fav.type === "الامتحانات");

  const [openLessons, setOpenLessons] = useState(false);
  const [openExercises, setOpenExercises] = useState(false);
  const [openMorakaba, setOpenMorakaba] = useState(false);
  const [openExams, setOpenExams] = useState(false);

  const totalFavorites = favorites.length;
  const totalCompleted = completedExams.length;

  return (
    <>
      <div className='font-cairo bg-light dark:bg-dark dark:text-white flex flex-col gap-5 min-h-screen pt-[120px] px-5 py-5 md:px-12 lg:px-16 xl:px-20'>
        {/* Header avec statistiques et bouton reset */}
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
          <div className='text-center w-full'>
            <h1 className='text-4xl md:text-5xl text-center font-bold'>المفضلة</h1>
            <div className='flex justify-center gap-6 mt-2'>
              <div className='flex items-center  gap-2 text-gray-600 dark:text-gray-400'>
                <Heart size={20} className='text-red-500' />
                <span>{totalFavorites} عنصر مفضل</span>
              </div>
              <div className='flex items-center gap-2 text-gray-600 dark:text-gray-400'>
                <CheckCircle size={20} className='text-green-500' />
                <span>{totalCompleted} مكتمل</span>
              </div>
            </div>
          </div>
          
          {totalFavorites > 0 && (
            <div className='flex justify-center  w-full'>
               <button
              onClick={() => setShowResetModal(true)}
              className='flex items-center gap-2 bg-primary hover:bg-primary/90 cursor-pointer text-white px-4 py-2 rounded-lg transition-colors'
            >
              <Trash2 size={20} />
              <span>مسح الكل</span>
            </button>
            </div>
          )}
        </div>

        {/* Message si aucun favori */}
        {totalFavorites === 0 && (
          <div className='flex flex-col items-center justify-center py-20 text-center'>
            <Heart size={64} className='text-gray-300 dark:text-gray-600 mb-4' />
            <h2 className='text-2xl font-bold text-gray-500 dark:text-gray-400 mb-2'>
              لا توجد عناصر مفضلة
            </h2>
            <p className='text-gray-400 dark:text-gray-500'>
              ابدأ بإضافة بعض العناصر إلى المفضلة
            </p>
          </div>
        )}
        {/* Sections des favoris */}
        <div className="rounded-lg p-4 bg-white dark:bg-slate-800 shadow-md">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setOpenLessons(!openLessons)}>
            <h2 className='text-3xl md:text-4xl font-bold'>دروس</h2>
            <span>{openLessons ? <ChevronUp size={30}/> : <ChevronDown size={30}/>}</span>
            <span className='bg-primary text-center text-xl font-bold w-8 h-8 rounded-full text-white'>{favoritesLessons.length}</span>
          </div>
          {openLessons && (
            <div className="mt-8 flex flex-wrap gap-4">
              {favoritesLessons.length > 0 ? (
                favoritesLessons.map((fav, i) => <DocumentCard key={i} ressource={fav} />)
              ) : (
                <p className="text-gray-500 dark:text-gray-400 text-center w-full py-4">لا توجد دروس مفضلة</p>
              )}
            </div>
          )}
        </div>

        <div className="rounded-lg p-4 bg-white dark:bg-slate-800 shadow-md">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setOpenExercises(!openExercises)}>
            <h2 className='text-3xl md:text-4xl font-bold'>تمارين</h2>
            <span>{openExercises ? <ChevronUp size={30}/> : <ChevronDown size={30}/>}</span>
            <span className='bg-primary text-center text-xl font-bold w-8 h-8 rounded-full text-white'>{favoritesExercises.length}</span>
          </div>
          {openExercises && (
            <div className="mt-8 flex flex-wrap gap-4">
              {favoritesExercises.length > 0 ? (
                favoritesExercises.map((fav, i) => <DocumentCard key={i} ressource={fav} />)
              ) : (
                <p className="text-gray-500 dark:text-gray-400 text-center w-full py-4">لا توجد تمارين مفضلة</p>
              )}
            </div>
          )}
        </div>

        <div className="rounded-lg p-4 bg-white dark:bg-slate-800 shadow-md">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setOpenMorakaba(!openMorakaba)}>
            <h2 className='text-3xl md:text-4xl font-bold'>فروض</h2>
            <span>{openMorakaba ? <ChevronUp size={30}/> : <ChevronDown size={30}/>}</span>
            <span className='bg-primary text-center text-xl font-bold w-8 h-8 rounded-full text-white'>{favoritesMorakaba.length}</span>
          </div>
          {openMorakaba && (
            <div className="mt-8 flex flex-wrap gap-4">
              {favoritesMorakaba.length > 0 ? (
                favoritesMorakaba.map((fav, i) => <DocumentCard key={i} ressource={fav} />)
              ) : (
                <p className="text-gray-500 dark:text-gray-400 text-center w-full py-4">لا توجد فروض مفضلة</p>
              )}
            </div>
          )}
        </div>

        <div className="rounded-lg p-4 bg-white dark:bg-slate-800 shadow-md">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setOpenExams(!openExams)}>
            <h2 className='text-3xl md:text-4xl font-bold'>امتحانات</h2>
            <span>{openExams ? <ChevronUp size={30}/> : <ChevronDown size={30}/>}</span>
            <span className='bg-primary text-center text-xl font-bold w-8 h-8 rounded-full text-white'>{favoritesExams.length}</span>
          </div>
          {openExams && (
            <div className="mt-8 flex flex-wrap gap-4">
              {favoritesExams.length > 0 ? (
                favoritesExams.map((fav, i) => <DocumentCard key={i} ressource={fav} />)
              ) : (
                <p className="text-gray-500 dark:text-gray-400 text-center w-full py-4">لا توجد امتحانات مفضلة</p>
              )}
            </div>
          )}
        </div>
      
      </div>

      {/* Modal de confirmation pour reset */}
      {showResetModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-md mx-4">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle size={24} className="text-red-500" />
              <h3 className="text-xl font-bold dark:text-white">تأكيد المسح</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              هل أنت متأكد من أنك تريد مسح جميع العناصر المفضلة والامتحانات المكتملة؟ 
              لا يمكن التراجع عن هذا الإجراء.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowResetModal(false)}
                className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
              >
                إلغاء
              </button>
              <button
                onClick={handleResetAll}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                مسح الكل
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>  
  )
}
