<<<<<<< HEAD
import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
=======
import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar/Navbar";
>>>>>>> 6145519981446c5a22f0a57ae26bcb4486dc8378

function App(){
  const [count, setCount] = useState(0)

const App = () => { 
  return (
    <>

    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element ={<Home/>}/>
        <Route path='/about' element ={<Home/>}/>
        <Route path='/contact' element ={<Home/>}/>
        


      </Routes>
    </BrowserRouter>
    
    
    </>
  )
}


} 
export default App