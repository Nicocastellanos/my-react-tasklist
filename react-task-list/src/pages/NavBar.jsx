import React from 'react'
import { Link } from 'react-router-dom'
import '../css/NavBar.css'

export default function navBar() {
  return (
    <nav className='nav-bar'>
        <p><Link to='/' className='links'>Inicio</Link></p>
        <p><Link to='/taskList' className='links'>My Taski</Link></p>
        <p><Link to='/aboutUs' className='links'>Sobre Nosotros</Link></p>
    </nav>
  )
}
