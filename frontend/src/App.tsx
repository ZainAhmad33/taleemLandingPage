import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { HeroSection } from './LandingPage/HeroSection/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroSection/>
    </>
  )
}

export default App
