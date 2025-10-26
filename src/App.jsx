import { useState } from 'react'
import angle from './assets/Watto.png'
import devil from './assets/OttihsPulg.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={angle} className="logo" alt="Angle" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={devil} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        I could be your angle or your devil
      </p>
    </>
  )
}

export default App
