import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TaskList from './components/TaskList'
import '/src/css/App.css'
import { Suspense, lazy } from 'react'
const Home =lazy(() => import('./pages/Home'))
const NavBar = lazy(() => import('./pages/NavBar'))
const AboutUs = lazy(() =>import('./pages/AboutUs'))

function App() {

  return (
    <BrowserRouter>

    <NavBar/>

    <Routes>
      <Route path='/' element={
        <Suspense fallback={<div className='loading'>loading...</div>}>
          <Home/>
        </Suspense>
      }/>
      <Route path='/taskList' element={
        <Suspense fallback={<div className='loading'>loading...</div>}>
          <div className='todoapp'>
            <TaskList/>
          </div>
        </Suspense>
      }/>
      <Route path='/aboutUs' element={
        <Suspense fallback={<div className='loading'>loading...</div>}>
          <AboutUs/>
        </Suspense>
      }/>
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
