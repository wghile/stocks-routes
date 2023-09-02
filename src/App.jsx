import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Stock from './components/Stock'

function App() {

  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/stocks' element={<Dashboard />}/>
        <Route path='/about' element={<About />}/> 
        <Route path='/stocks/:symbol' element={<Stock />}/> 
      </Routes>
    </div>
  )
}

export default App
