import React from 'react'
import TaskRow from './TaskRow'
import '../css/TaskTable.css'

export default function TaskTable({tasks, updateTask, showComplete = false, incompleted, completed, deleteTask, completeTask}) {

  const taskTableRows = (completeValue)=>{
    return(
      tasks
      .filter(task => task.complete === completeValue)
      .map(task => (
        <TaskRow task= {task} key={task.titulo} updateTask={updateTask} deleteTask={deleteTask} completeTask={completeTask}/>
        ))
    )
  }

  return (
    <table>
        <thead>
        <tr>
          <td className='title'>
            {incompleted} 
            {completed}
          </td>
        </tr>
        </thead>
        <tbody className='tasks'>
        {
           taskTableRows(showComplete)      
        }
        </tbody>
    </table>
  )
}