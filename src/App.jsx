import { useState } from 'react'
import './App.css'
import RandomCoffee from './assets/components/RandomCoffee'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <RandomCoffee />
    </div>
  )
}

export default App
