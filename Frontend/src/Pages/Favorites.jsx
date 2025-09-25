import React, { useContext, useEffect, useState } from 'react'
import { FavoritesContext } from '../Context/FavoritesContext'
import DocumentCard from '../Components/DocumentCard'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function Favorites() {
  const { favorites } = useContext(FavoritesContext);
  useEffect(()=>{
    console.log(favorites);
    
  })

  const favoritesLessons = favorites.filter(fav => fav.type === "الدروس");
  const favoritesExercises = favorites.filter(fav => fav.type === "التمارين");
  const favoritesMorakaba = favorites.filter(fav => fav.type === "المراقبة المستمرة");
  const favoritesExams = favorites.filter(fav => fav.type === "الامتحانات");

  const [openLessons, setOpenLessons] = useState(false);
  const [openExercises, setOpenExercises] = useState(false);
  const [openMorakaba, setOpenMorakaba] = useState(false);
  const [openExams, setOpenExams] = useState(false);

  return (
    <div className='font-cairo bg-light dark:bg-dark dark:text-white flex flex-col gap-5 min-h-screen pt-[120px] px-5 py-5 md:px-12 lg:px-16 xl:px-20'>
      <h1 className='text-4xl md:text-5xl font-bold'>المقضلة</h1>
      <div className="rounded-lg p-4">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setOpenLessons(!openLessons)}>
          <h2 className='text-3xl md:text-4xl font-bold'>دروس</h2>
          {openLessons ? <ChevronUp size={30}/> : <ChevronDown size={30}/>}
        </div>
        {openLessons && (
          <div className="mt-8 flex flex-wrap gap-4">
            {favoritesLessons.map((fav, i) => <DocumentCard key={i} ressource={fav} />)}
          </div>
        )}
      </div>

      <div className="rounded-lg p-4">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setOpenExercises(!openExercises)}>
          <h2 className='text-3xl md:text-4xl  font-bold'>تمارين</h2>
          {openExercises ? <ChevronUp size={30}/> : <ChevronDown size={30}/>}
        </div>
        {openExercises && (
          <div className="mt-8 flex flex-wrap gap-4">
            {favoritesExercises.map((fav, i) => <DocumentCard key={i} ressource={fav} />)}
          </div>
        )}
      </div>

      <div className="rounded-lg p-4">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setOpenMorakaba(!openMorakaba)}>
          <h2 className='text-3xl md:text-4xl font-bold'>مراقبة مستمرة</h2>
          {openMorakaba ? <ChevronUp size={30}/> : <ChevronDown size={30}/>}
        </div>
        {openMorakaba && (
          <div className="mt-8 flex flex-wrap gap-4">
            {favoritesMorakaba.map((fav, i) => <DocumentCard key={i} ressource={fav} />)}
          </div>
        )}
      </div>

      <div className="rounded-lg p-4">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setOpenExams(!openExams)}>
          <h2 className='text-3xl md:text-4xl font-bold'>امتحانات</h2>
          {openExams ? <ChevronUp size={30}/> : <ChevronDown size={30}/>}
        </div>
        {openExams && (
          <div className="mt-8 flex flex-wrap gap-4">
            {favoritesExams.map((fav, i) => <DocumentCard key={i} ressource={fav} />)}
          </div>
        )}
      </div>

    </div>
  )
}
