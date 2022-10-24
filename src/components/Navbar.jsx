import React from 'react'
import { NavLink } from 'react-router-dom';
import '../static/App.css'
const Navbar = () => {
  return (
    <div className='header'>
        <NavLink className={'links'} to={'/contact'}>Contact</NavLink>
        <NavLink className={'links'} to={'/projects'}>Projects</NavLink>
        <NavLink className={'links'} to={'/'}>Home</NavLink>
    </div>
  )
}

export default Navbar