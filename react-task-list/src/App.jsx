import AddNewTask from './components/AddNewTask'
import Header from './components/Header'
import Task from './components/Task'
import '/src/css/App.css'

function App() {

  return (
    <div className='todoapp'>
      <Header/>
      <AddNewTask/>
      <Task/>
    </div>
  )
}

export default App
