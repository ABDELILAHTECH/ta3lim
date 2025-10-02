import React, { useEffect, useMemo, useState, useCallback } from 'react'
import DocumentCard from './DocumentCard'
import { useContext } from 'react'
import { RessourcesContext } from '../Context/RessourcesContext'
import { LevelContext } from "../Context/LevelContext"
import { ClassContext} from "../Context/ClassContext";
import { DocumentsTypesContext } from "../Context/DocumentsTypesContext";
import { SubjectContext } from "../Context/SubjectContext";
import { FileText, X } from 'lucide-react'
import { addTypeToDocuments } from '../utils/documentTypeDetector'
import Pagination from './Pagination'
export default function DocumentsCards() {
     const {level, clearLevel} = useContext(LevelContext);
     const {classItem, clearClass} = useContext(ClassContext);
     const {docsType, clearDocsType} = useContext(DocumentsTypesContext);
     const {subject, clearSubject} = useContext(SubjectContext);
     const {ressources} = useContext(RessourcesContext);
     
     // État pour la pagination
     const [currentPage, setCurrentPage] = useState(1);
     const itemsPerPage = 12; // Nombre d'éléments par page
     
     // Mémoriser les ressources avec type pour éviter de les recalculer
     const ressourcesWithType = useMemo(() => {
       return addTypeToDocuments(ressources);
     }, [ressources]);
     
     // Filtrage optimisé
     const ressourcesFiltred = useMemo(() => {
       return ressourcesWithType.filter(ressource => {
         // Filtres de base
         const levelMatch = !level || ressource.level === level;
         const typeMatch = !docsType || ressource.type === docsType;
         const classMatch = !classItem || ressource.class === classItem;
         const subjectMatch = !subject || ressource.subject === subject;
         
         return levelMatch && typeMatch && classMatch && subjectMatch;
       });
     }, [ressourcesWithType, level, docsType, classItem, subject]);
     
     // Fonction pour réinitialiser tous les filtres
     const resetFilters = useCallback(() => {
       clearLevel();
       clearDocsType();
       clearClass();
       clearSubject();
     }, [clearLevel, clearDocsType, clearClass, clearSubject]);
     
     // Vérifier s'il y a des filtres actifs
     const hasActiveFilters = level || docsType || classItem || subject;
     
     // Calculer la pagination
     const totalPages = Math.ceil(ressourcesFiltred.length / itemsPerPage);
     const startIndex = (currentPage - 1) * itemsPerPage;
     const endIndex = startIndex + itemsPerPage;
     const paginatedRessources = ressourcesFiltred.slice(startIndex, endIndex);
     
     // Réinitialiser la page quand les filtres changent
     useEffect(() => {
       setCurrentPage(1);
     }, [level, docsType, classItem, subject]);
     
     // Fonction pour changer de page
     const handlePageChange = (page) => {
       setCurrentPage(page);
       window.scrollTo({ top: 0, behavior: 'smooth' });
     };

  return (
    <div className='w-full'>
      {/* Filtres actifs et réinitialisation */}
      {hasActiveFilters && (
        <div className='mb-6 space-y-4'>
          {/* Filtres actifs */}
          <div className='flex flex-wrap justify-center gap-2'>
            {level && (
              <span className='bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm'>
                المستوى: {level}
              </span>
            )}
            {docsType && (
              <span className='bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm'>
                النوع: {docsType}
              </span>
            )}
            {classItem && (
              <span className='bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm'>
                الفصل: {classItem}
              </span>
            )}
            {subject && (
              <span className='bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-sm'>
                المادة: {subject}
              </span>
            )}
          </div>
          
          {/* Bouton de réinitialisation */}
          <div className='flex justify-center'>
            <button
              onClick={resetFilters}
              className='flex items-center gap-2 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors'
            >
              <X size={16} />
              <span>مسح الكل</span>
            </button>
          </div>
        </div>
      )}

      {/* Statistiques principales */}
      <div className='mb-6 text-center'>
        <div className='bg-white dark:bg-slate-800 rounded-lg p-4 shadow-md inline-block'>
          <div className='flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400'>
            <div className='flex items-center gap-2'>
              <FileText size={16} className='text-primary' />
              <span>عرض {ressourcesFiltred.length} من {ressources.length} ملف</span>
            </div>
            {ressourcesFiltred.length === 0 && hasActiveFilters && (
              <div className='flex items-center gap-2 text-red-500'>
                <span>لا توجد ملفات تطابق الفلاتر المحددة</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Cartes des documents */}
      <div className='flex justify-center flex-wrap gap-4 h-fit w-full'>
        {paginatedRessources.map((ressource, index) => (
          <DocumentCard key={`${ressource._id || ressource.title}-${index}`} ressource={ressource} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        itemsPerPage={itemsPerPage}
        totalItems={ressourcesFiltred.length}
      />
    </div>
  )
}
