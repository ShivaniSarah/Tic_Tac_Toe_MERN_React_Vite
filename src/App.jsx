import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import { GameArea } from './components/GameArea'
import {Routes,Route,Link,NavLink} from 'react-router-dom'



function App() {
  

  return (
  
     <div className="home_page flex">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/gamepage' element={<GameArea/>}   />
        
      </Routes>
      
      
    </div>
  
   
  )
}

export default App
