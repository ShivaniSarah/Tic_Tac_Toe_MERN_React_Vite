import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Quote from './components/Quote'
import { GameArea } from './components/GameArea'

function App() {
  

  return (
    <div className="home_page flex">
      <Home/>
      {/* <GameArea/> */}
      <Quote/>
      
    </div>
  )
}

export default App
