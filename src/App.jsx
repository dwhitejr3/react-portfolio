import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      
      <div>
        <header>
          <a href="https://vitejs.dev" target="_blank">
          <Button do={() => {href="https://react.dev"}} title = "About me" />
          <Button do={() => {href="https://react.dev"}} title = "Portfolio" />
          <Button do={() => {href="https://react.dev"}} title = "Resume" />
          <Button do={() => {href=".contact"}} title = "Contact" />
        </a>
        
        </header>
        
      </div>
      <h1>Welcome to Demetrius's Portfolio</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
         
        </p>
      </div>
      <p className="contact">
        
        yooooooooo
      </p>
    </>
  )
}

export default App
