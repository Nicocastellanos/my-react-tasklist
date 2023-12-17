import React from 'react'
import '../css/path.css'

export default function Home() {
  return (
    <div className='home'>
        <h1 className='title-home'>Bienvenido a Taski</h1>
        <p className='p-home'>Make your daily tasks</p>
        <img src='./src/img/taski.png' alt="taski" className='img'/>
    </div>
  )
}
