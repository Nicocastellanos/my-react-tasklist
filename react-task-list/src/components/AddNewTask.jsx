import React, { useState } from 'react'
import '/src/css/AddNewTask.css'

export default function AddNewTask(props) {

  const {createNewTask} = props;

  const [addTask, setAddTask] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault();
    createNewTask(addTask)
    setAddTask('');
  }

  return (
    <form className='add-task' onSubmit={handleSubmit}>
        <input
         type="text"
          placeholder='Add your Title'
          className='input'
          value={addTask}
          onChange={(e) => setAddTask(e.target.value)}
         />
        <button className='buttonAdd'><img src="/src/img/añadir.png" alt="añadir" className='icono-add' onClick={()=>{alert(addTask)}} /></button>
    </form>
  )
}