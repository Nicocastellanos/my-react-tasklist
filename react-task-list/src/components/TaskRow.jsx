import React from 'react'
import '../css/TaskRow.css'

export default function TaskRow({task, updateTask, deleteTask}) {

  return (
    <tr>
        <label className='task'>
            <input 
                className=''
                type="checkbox" 
                checked={task.complete}
                onChange={() => updateTask(task)}
            />
            <p className='task-title'>{task.titulo}</p>
            <button className='button-delete' onClick={()=> deleteTask(task)}><img src="./src/img/delete.png" alt="borrar" className='icon'/></button>
        </label>
    </tr>
  );
};