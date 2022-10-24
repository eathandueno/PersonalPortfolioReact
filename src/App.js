import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/projects' element={<Projects />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </Router>
  )
}

export default App
