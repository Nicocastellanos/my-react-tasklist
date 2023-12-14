import React from 'react'
import '/src/css/TaskList.css'

export default function TaskList(props) {

    const {id, titulo, descripcion, iconoUp, iconoDel} = props.taskProp;

  return (
    <div className='task-list'>
        <h2 className='id-task'>{id}</h2>
        <h1 className='titulo-task'>{titulo}</h1>
        <p className='descripcion'>{descripcion}</p>
        <button className='editar'><img src={iconoUp} alt="edit" /></button>
        <button className='eliminar'><img src={iconoDel} alt="delete" /></button>
    </div>
  )
}