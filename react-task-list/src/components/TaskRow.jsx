import React from 'react'

export default function TaskRow({task, updateTask, deleteTask}) {

  return (
    <tr>
        <td className='task'>
            <input 
                className=''
                type="checkbox" 
                checked={task.complete}
                onChange={() => updateTask(task)}
            />
            {task.titulo}
            <button onClick={()=> deleteTask(task)}><img src="./src/img/delete.png" alt="borrar" /></button>
        </td>
    </tr>
  );
};