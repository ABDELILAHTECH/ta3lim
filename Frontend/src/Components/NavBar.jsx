import React, { useContext } from 'react'
import NavLink from './NavLink'
import {ThemeContext} from "../Context/ThemeContext"
import { BookOpen, FileText, GraduationCap, Heart, Moon, Sun } from 'lucide-react'
import AppLogo from './AppLogo'

export default function NavBar() {
  const {theme,toggleTheme} = useContext(ThemeContext)
  const navLinks = [
    {
      name:"دروس",
      path:"/ressources",
      icon:BookOpen,
    },
    {
      name:"تمارين",
      path:"/ressources",
      icon:FileText,
    },
    {
      name:"امتحانات",
      path:"/ressources",
      icon:GraduationCap,
    },
    {
      name:"المقضلة",
      path:"/favorite",
      icon:Heart,
    },
  ]
  return (
    <header className='bg-light dark:bg-slate-900 fixed top-0 left-0 right-0 flex items-center justify-between px-5 py-5  md:px-12 lg-px-16 xl:px-20 z-100 bg-white' >
        <div>
            <AppLogo />
        </div>
        <nav className='flex gap-3 '>
          <ul className='flex gap-2 sm:gap-5 items-center'> 
            {
              navLinks.map((navlink,index)=>
              <li key={index} className=' flex justify-start gap-2  text-md w-8 sm:w-fit overflow-hidden hover:overflow-visible hover:ml-15   md:text-lg  lg:text-xl font-medium  dark:text-white font-cairo hover:text-primary transition duration-300 ease-in-out'>
                <div className='sm:hidden'>
                  <navlink.icon  />
                </div>
                <NavLink 
                navLinkName={navlink.name}
                 navLinkPath={navlink.path}
              />
              </li>)
            }
          </ul>
          <div onClick={toggleTheme} className=''>
              {theme === "dark" ? <Moon color="white" className=''/> : <Sun />}
          </div>
        </nav>
    </header>
  )
}
