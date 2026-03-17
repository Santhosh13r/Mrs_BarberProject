<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0)
=======
import React from 'react'
import { BrowserRouter, Routes } from 'react-router'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
>>>>>>> 20c26383a7bbc93d09f3f53448924d15370a0554

const App = () => { 
  return (
    <>
<<<<<<< HEAD
      <Navbar></Navbar>
=======

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
    
    
>>>>>>> 20c26383a7bbc93d09f3f53448924d15370a0554
    </>
  )
}

export default App