import React, { useEffect, useState } from 'react'
import '/src/css/AddNewTask.css'

export default function AddNewTask(props) {

  const {createNewTask} = props;
  const [addTask, setAddTask] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
      setMessage(validTask(addTask))
  }, [addTask])
  

  const handleSubmit = (e)=>{
    e.preventDefault();
    createNewTask(addTask)
    setAddTask('');
  }
  const validTask = (addTask)=>{
     if (addTask.length < 3) {
      return 'La tarea debe tener minimo 3 caracteres'
     }
  }
  const isSubmitDisabled = message;

  return (
    <div>
      <form className='add-task' onSubmit={handleSubmit}>
        <div>
          <label className='label-task'>
            <input
            type="text"
              placeholder='Add your Title'
              className='input'
              value={addTask}
              onChange={(e) => setAddTask(e.target.value)}
            />
          </label>
          <span role='alert' className='add-task-alert'>{message}</span>
        </div>
          <button className='buttonAdd' onClick={()=>{(addTask)}} disabled={isSubmitDisabled}><img src="/src/img/añadir.png" alt="añadir" className='icono-add' /></button>
      </form>
    </div>
  )
}