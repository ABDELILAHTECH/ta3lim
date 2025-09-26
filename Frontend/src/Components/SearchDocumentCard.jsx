import { useContext } from "react";
import {FavoritesContext} from "../Context/FavoritesContext"
import {Heart , ArrowUpRight} from "lucide-react"
export default function SearchDocumentCard({ressource}) {
  const {favorites,addToFavorites,removeFromFavorites} = useContext(FavoritesContext);
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
  return (
     <li key={ressource._id} className="dark:text-white border hover:border-2 transition-all duration-300 border-primary px-4 py-2 rounded-xl">
        <a target='_blank'  href={ressource.fileUrl}>
        <div className="flex justify-between ">
            <span>{ressource.title}</span>
            <button className='' onClick={favoriteBtnHandleClick}>
              <Heart fill={isFavorite ? "#4F9DFF" : "none"} />
            </button>  
        </div>
        <div className='mt-3 flex items-center justi flex-wrap gap-2'>
            <span className='bg-orange-500 font-bold px-4 py-1 rounded-xl text-sm'>{ressource.subject} </span>
            <span className='bg-red-800 px-4 py-1 rounded-xl text-sm '>{ressource.level} </span>
            <span className='bg-green-600 px-4 py-1 rounded-xl text-sm'>{ressource.class} </span>
            <span className='bg-yellow-500 px-4 py-1 rounded-xl text-sm'>{ressource.type} </span>
       </div>
       </a>
     </li>
  )
}
