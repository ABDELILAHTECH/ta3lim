import React, { useContext } from 'react'
import {ThemeContext} from "../Context/ThemeContext"
import { BookOpen, FileText, GraduationCap, Heart, Moon, Sun } from 'lucide-react'
import AppLogo from './AppLogo'
import { Link } from 'react-router-dom'
import Favorites from '../Pages/Favorites'
import { FavoritesContext } from '../Context/FavoritesContext'

export default function NavBar() {
  const {theme,toggleTheme} = useContext(ThemeContext);
  const {favorites} = useContext(FavoritesContext);
 
  return (
    <header className='bg-light font-cairo dark:bg-slate-900 fixed top-0 left-0 right-0 flex items-center justify-between px-5 md:px-12 lg-px-16 xl:px-20 z-100 bg-white' >
        <div>
            <AppLogo />
        </div>
        <nav className='flex'>
          <ul className='flex items-center'> 
              <li>
                 <Link to="/ressources" >
                     <span className='font-bold text-lg sm:text-2xl sm:ml-5 dark:text-white hover:text-primary transition-colors duration-400 pt-2 px-3 '>الموارد</span>
                 </Link>
              </li>
              <li className='relative pt-2 px-3 dark:text-white hover:text-primary ransition-colors duration-400'>
                <Link to="/favorites" >
                    <Heart size={30} />
                </Link>
                <span className='bg-primary text-white absolute top-1 right-0 rounded-full w-5 h-5 flex items-center justify-center'>{favorites.length}</span>
              </li>
              
          </ul>
          <div onClick={toggleTheme} className='hover:text-primary pt-2 px-3 transition-colors cursor-pointer duration-400 '>
              {theme === "dark" ? <Moon size={30} color="white" className=''/> : <Sun size={30} />}
          </div>
        </nav>
    </header>
  )
}
