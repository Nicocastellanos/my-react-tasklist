import React, { useEffect, useState } from 'react'
import AddNewTask from './AddNewTask'
import Header from './Header'
import TaskTable from './TaskTable'

export default function TaskList() {


    const [tasksItems, setTasksItems] = useState([])
    
    function createNewTask(newTask) {
      if (!tasksItems.find(tasks => tasks.titulo === newTask)) {
        setTasksItems([...tasksItems, {titulo: newTask, complete: false}])
      }
    }
    
    const updateTask = (index, updatedTask) => {
      const updatedTasks = tasksItems.map((task, i) => (i === index ? updatedTask : task)); // Actualiza la tarea en el índice dado
      setTasksItems(updatedTasks); // Actualiza la lista de tareas
  };

    function deleteTask(task) {
      setTasksItems(tasksItems.filter((t) => t.titulo !== task.titulo));
    }


    useEffect(() => {
     let data = localStorage.getItem('tasks')
     if (data) {
      setTasksItems(JSON.parse(data));
     }
    },[])
    
    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasksItems))
    }, [tasksItems])
    
  return (
    <>
        <Header/>
        <AddNewTask  createNewTask={createNewTask}/>
        <TaskTable tasks = {tasksItems} updateTask = {updateTask} deleteTask = {deleteTask} incompleted = "Task incompleted"/>
        <TaskTable tasks = {tasksItems} updateTask = {updateTask} deleteTask = {deleteTask} showComplete = {true} completed = "Task completed"/>
    </>
  )
}