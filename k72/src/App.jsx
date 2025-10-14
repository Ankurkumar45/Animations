import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Work from './pages/Work'
import Agency from './pages/Agency'
import Projects from './pages/Projects'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'


function App() {

  return (
    <>
      <div className='text-white'>
        {/* <Navbar /> */}
        <FullScreenNav />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agencies" element={<Agency />} />
          <Route path="/works" element={<Work />} />
          <Route path="/projects" element={<Projects />} />
        </Routes> */}
      </div>
    </>
  )
}

export default App
