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
    
    const completeTask = (task) => {
      setTasksItems((prevTasks) =>
        prevTasks.map((t) => (t.titulo === task.titulo ? { ...t, complete: !t.complete } : t))
      );
    };
    
    const updateTask = (updatedTask) => {
      setTasksItems((prevTasks) =>
      prevTasks.map((t) => (t.titulo === updatedTask.titulo ? { ...t, ...updatedTask } : t))
      );
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
        <TaskTable tasks = {tasksItems} updateTask = {updateTask} deleteTask = {deleteTask} completeTask = {completeTask} incompleted = "Task incompleted"/>
        <TaskTable tasks = {tasksItems} updateTask = {updateTask} deleteTask = {deleteTask} completeTask = {completeTask} showComplete = {true} completed = "Task completed"/>
    </>
  )
}