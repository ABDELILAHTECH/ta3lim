import React, { useContext } from 'react'
import NavLink from './NavLink'
import {ThemeContext} from "../Context/ThemeContext"
import { Moon, Sun } from 'lucide-react'
import AppLogo from './AppLogo'

export default function NavBar() {
  const {theme,toggleTheme} = useContext(ThemeContext)
  const navLinks = [
    {
      name:"دروس",
      path:"/ressources"
    },
    {
      name:"تمارين",
      path:"/ressources"
    },
    {
      name:"امتحانات",
      path:"/ressources"
    },
    {
      name:"المقضلة",
      path:"/favorite"
    },
  ]
  return (
    <header className='bg-light dark:bg-slate-900 fixed top-0 left-0 right-0 flex items-center justify-between px-5 py-5  md:px-12 lg-px-16 xl:px-20 z-100 bg-white' >
        <div>
            <AppLogo />
        </div>
        <nav>
          <ul className='flex gap-2 display-none items-center'> 
            {
              navLinks.map((navlink,index)=>
              <li key={index} className='px-2 py-1 text-xl lg:text-2xl font-medium  hidden sm:block  dark:text-white font-cairo hover:text-primary transition-colors duration-300 ease-in-out"'>
                <NavLink 
                navLinkName={navlink.name}
                 navLinkPath={navlink.path}
              />
              </li>)
            }
            <li onClick={toggleTheme} className='mr-5'>
              {theme === "dark" ? <Moon color="white" className=''/> : <Sun />}
            </li>
          </ul>
        </nav>
    </header>
  )
}
