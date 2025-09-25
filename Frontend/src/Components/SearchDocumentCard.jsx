import { useContext } from "react";
import {FavoritesContext} from "../Context/FavoritesContext"
import {Heart , ArrowUpRight} from "lucide-react"
export default function SearchDocumentCard({ressource}) {
  const {favorites,addToFavorites,removeFromFavorites} = useContext(FavoritesContext);
  const isFavorite = favorites.some(fav => fav.title === ressource.title);

  const favoriteBtnHandleClick = () => {
      if (isFavorite) {
         removeFromFavorites(ressource);
      } else {
         addToFavorites(ressource);
  }
  }
  return (
     <li key={ressource._id} className="dark:text-white border hover:border-2 transition-all duration-300 border-primary px-4 py-2 rounded-xl">
        <div className="flex justify-between ">
            <span>{ressource.title}</span>
            <button className='' onClick={favoriteBtnHandleClick}>
              <Heart fill={isFavorite ? "#4F9DFF" : "none"} />
          </button>  
        </div>
        <div className='mt-3 flex items-center justi flex-wrap gap-2'>
            <span className='bg-red-800 px-4 py-1 rounded-xl text-sm '>{ressource.level} </span>
            <span className='bg-green-600 px-4 py-1 rounded-xl text-sm'>{ressource.class} </span>
            <span className='bg-yellow-500 px-4 py-1 rounded-xl text-sm'>{ressource.type} </span>
            <span className=' hover:text-primary transition-colors duration-300 '>
              <a target='_blank'  href={ressource.fileUrl}>
                <ArrowUpRight />
              </a>
            </span>
       </div>
     </li>
  )
}
