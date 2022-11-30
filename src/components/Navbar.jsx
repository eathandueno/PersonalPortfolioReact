import React from 'react'
import { NavLink } from 'react-router-dom';
import '../static/App.css'
const Navbar = () => {
  return (
    <div className='header'>
    <nav>
        <NavLink className={'links'} to={'/'}>Home</NavLink>
        <NavLink className={'links'} to={'/projects'}>Projects</NavLink>
        <NavLink className={'links'} to={'/contact'}>Contact</NavLink>
    </nav>
    <h2 className='title'>Eathan Dueno</h2>
    </div>
  )
}

export default Navbar