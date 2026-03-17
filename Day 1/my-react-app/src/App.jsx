import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const name ="Jayraj Venugopal Gajul";
  const batch ="Full Stack Bootcamp";
    
  return (
    <>
    <div className="container">
      <h1 style={{color:'blue'}}>{name}</h1>
      <p>Batch - {batch}</p>
      <p>Current Date & Time : {new Date().toLocaleString()}</p>

      <ul>
        <li>Learing React</li>
        <li>Using JSX element</li>
        <li>Applying styles</li>
      </ul>
    </div>
    </>
  )
}

export default App
