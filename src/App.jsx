import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Components/Form/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App w-auto bg-black p-5 rounded-lg'>
      <h1>pokemon-dex</h1>
      <div className='Form-field mt-5'>
        <Form />
      </div>
    </div>
  )
}

export default App
