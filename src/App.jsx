import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/components/Navbar/Navbar'
import PriceList from './assets/components/PriceList/PriceList'
import Dashboard from './assets/components/Dashboard/Dashboard'
import PhoneBar from './assets/components/PhoneBar/PhoneBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <Navbar></Navbar>
      <h1 className='text-7xl text-purple-600'>hello from tailwind</h1>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
      <PhoneBar></PhoneBar>
    </div>
  )
}

export default App
