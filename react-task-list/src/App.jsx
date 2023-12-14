import Header from './components/Header'
import TaskList from './components/TaskList'
import '/src/css/App.css'

function App() {

  return (
    <div className='todoapp'>
      <Header/>
      <TaskList/>
    </div>
  )
}

export default App
