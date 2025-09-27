import { useContext } from "react";
import {FavoritesContext} from "../Context/FavoritesContext"
import {Heart, ArrowUpRight, FileText, BookOpen, ClipboardList, FileCheck} from "lucide-react"

export default function SearchDocumentCard({ressource}) {
  const {favorites, addToFavorites, removeFromFavorites} = useContext(FavoritesContext);
  const isFavorite = favorites.some(fav => fav.title === ressource.title);

  const favoriteBtnHandleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();  
    if (isFavorite) {
         removeFromFavorites(ressource);
      } else {
         addToFavorites(ressource);
  }
  }

  // Get icon based on type
  const getTypeIcon = (type) => {
    switch(type) {
      case "الدروس": return BookOpen;
      case "التمارين": return FileText;
      case "الامتحانات": return ClipboardList;
      case "الفروض": return FileCheck;
      default: return FileText;
    }
  }

  // Get type color
  const getTypeColor = (type) => {
    switch(type) {
      case "الدروس": return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "التمارين": return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "الامتحانات": return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      case "الفروض": return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
    }
  }

  const TypeIcon = getTypeIcon(ressource.type);

  return (
    <li className="group">
      <a 
        target='_blank' 
        href={ressource.fileUrl}
        className="block p-4 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-all duration-200 rounded-lg border border-transparent hover:border-gray-200 dark:hover:border-gray-600"
      >
        <div className="flex items-start justify-between gap-3">
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <TypeIcon size={16} className="text-gray-500 dark:text-gray-400 flex-shrink-0" />
              <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                {ressource.title}
              </h3>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <span className={`px-2 py-1 rounded-md text-xs font-medium ${getTypeColor(ressource.type)}`}>
                {ressource.type}
              </span>
              {ressource.subject && (
                <span className="px-2 py-1 rounded-md text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
                  {ressource.subject}
                </span>
              )}
              {ressource.level && (
                <span className="px-2 py-1 rounded-md text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
                  {ressource.level}
                </span>
              )}
              {ressource.class && (
                <span className="px-2 py-1 rounded-md text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
                  {ressource.class}
                </span>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button 
              onClick={favoriteBtnHandleClick}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
              title={isFavorite ? "إزالة من المفضلة" : "إضافة إلى المفضلة"}
            >
              <Heart 
                size={18} 
                className={`transition-colors duration-200 ${
                  isFavorite 
                    ? "text-primary fill-primary" 
                    : "text-gray-400 hover:text-primary"
                }`} 
              />
            </button>  
            <ArrowUpRight 
              size={16} 
              className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200" 
            />
          </div>
       </div>
       </a>
     </li>
  )
}
