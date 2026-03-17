import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Carousel from './components/Carousel'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Carousel/>
  </StrictMode>,
)
