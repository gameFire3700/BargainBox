import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen w-screen flex justify-center items-center' >
      <h1 className='bg-green-500 text-4xl text-white '> BargainBox </h1>
    </div>
  )
}

export default App
