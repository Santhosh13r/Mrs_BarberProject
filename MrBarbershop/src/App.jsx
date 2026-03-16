import React from 'react'
import { BrowserRouter, Routes } from 'react-router'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'

const App = () => {
  return (
    <>

    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Routes path="/"
           elemant={<Home/>}/>
          
          <Routes path="/about"
           elemant={<About/>}/>

          <Routes path="/services"
           elemant={<Services/>}/>

      </Routes>
    </BrowserRouter>
    
    
    </>
  )
}

export default App