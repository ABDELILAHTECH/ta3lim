import { createContext, useEffect, useState } from "react";



export const FavoritesContext = createContext();

export function FavoritesProvider ({children}){
      const [favorites,setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || [])
      
      const addToFavorites = (document) => {
         setFavorites(prev=>[...prev,document]);
      }
      const removeFromFavorites = (document) => {
         setFavorites(favorites.filter(favorite=>favorite._id !== document._id))
      }

      useEffect(()=>{
        localStorage.setItem("favorites",JSON.stringify(favorites))
        console.log(favorites);
        
      })
      return(
         <FavoritesContext.Provider value={{favorites,addToFavorites,removeFromFavorites}}>
            {children}
         </FavoritesContext.Provider>
    )
}