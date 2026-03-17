import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar/Navbar";

function App(){
  const [count, setCount] = useState(0)

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


} 
export default App