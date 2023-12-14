import React from 'react'
import '/src/css/AddNewTask.css'

export default function AddNewTask() {
  return (
    <div className='add-task'>
        <input type="text" placeholder='Add your new todo' className='input'/>
        <button className='buttonAdd'><img src="/src/img/añadir.png" alt="añadir" className='icono-add' /></button>
    </div>
  )
}