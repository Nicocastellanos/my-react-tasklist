import React from 'react'
import TaskList from './TaskList'

export default function Task() {

    const tasks = [
        {
            id: 1,
            titulo: "Lavar la loza",
            descripcion: "lavar los platos sucios",
            iconoUp: './src/img/edit.png',
            iconoDel: './src/img/delete.png'
        },
        {
          id: 2,
          titulo: "Sacar a los perros",
          descripcion: "llevar a los perros al parque",
          iconoUp: './src/img/edit.png',
          iconoDel: './src/img/delete.png'
      },
      {
        id: 3,
        titulo: "tender la cama",
        descripcion: "tender la cama y organizar la ropa",
        iconoUp: './src/img/edit.png',
        iconoDel: './src/img/delete.png'
    },
    {
      id: 4,
      titulo: "hacer arroz",
      descripcion: "hacer el arroz para el almuerzo",
      iconoUp: './src/img/edit.png',
      iconoDel: './src/img/delete.png'
  },
    ]

  return (
   <>
    {tasks.map(task => <TaskList taskProp = {task}/>)}
   </>
  )
}