import React from 'react'
import TaskRow from './TaskRow'

export default function TaskTable({tasks, updateTask, showComplete = false, incompleted, completed, deleteTask }) {

  const taskTableRows = (completeValue)=>{
    return(
      tasks
      .filter(task => task.complete === completeValue)
      .map(task => (
        <TaskRow task= {task} key={task.titulo} updateTask={updateTask} deleteTask={deleteTask}/>
        ))
    )
  }

  return (
    <table>
        <thead>
        <tr>
          <td>
            {incompleted} 
            {completed}
          </td>
          </tr>
        </thead>
        <tbody>
        {
           taskTableRows(showComplete)        
        }
        </tbody>
    </table>
  )
}