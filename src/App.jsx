import { useState } from 'react'
import angle from './assets/Watto.png'
import devil from './assets/OttihsPulg.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className="background">
          <h1>Hello with a Background!</h1>
        </div>
        <a href="https://youtu.be/lCAVcUQY83c?si=AhZBpGnAnSKdWpG7" target="_blank">
          <img src={angle} className="logo" alt="Angle" />
        </a>
        <a href="https://youtu.be/N5dTcc1eS4w?si=iKO2FvSBGqfu75Np" target="_blank">
          <img src={devil} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>I could be your angle or your devil</h1>
      <p className="read-the-docs">
        A simple website by Josiah Naisbitt.
        CSCE 3420.401
      </p>
    </>
  )
}

export default App
