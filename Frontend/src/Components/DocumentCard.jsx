import { ArrowUpRight , DownloadIcon, Heart } from 'lucide-react'
import { useContext } from 'react'
import { FavoritesContext } from '../Context/FavoritesContext'


export default function DocumentCard({ressource}) {
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
    <div className='border-1 border-primary h-fit w-full sm:w-[47%] lg:w-[31%] px-4 py-5 rounded-lg shadow-lg hover:shadow-xl hover:scale-101 hover:border-2 transition duration-300'>
       <div className='flex items-start justify-between'>
          <div className='text-md font-bold '>
                {ressource.title}  
          </div>
          <button className='' onClick={favoriteBtnHandleClick}>
              <Heart fill={isFavorite ? "#4F9DFF" : "none"} />
          </button>  
       </div>
       <div>
         <div className='mt-3 text-white flex flex-wrap gap-2'>
              <span className='bg-orange-500 font-bold px-4 py-1 rounded-xl text-sm'>{ressource.subject} </span>
              <span className='bg-red-800 font-bold px-4 py-1 rounded-xl text-sm '>{ressource.level} </span>
              <span className='bg-green-600 font-bold px-4 py-1 rounded-xl text-sm'>{ressource.class} </span>
              <span className='bg-yellow-500 font-bold px-4 py-1 rounded-xl text-sm'>{ressource.type} </span>
         </div>
         <div className='flex justify-end mt-5 hover:text-primary transition-colors duration-300 '>
           <a target='_blank'  href={ressource.fileUrl}>
              <ArrowUpRight />
           </a>
         </div>
      </div>  
    </div>
  )
}
