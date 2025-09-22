import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLink({navLinkName,navLinkPath}) {
  return (
    <Link to={navLinkPath} className=''>
       {navLinkName}
    </Link>
  )
}
