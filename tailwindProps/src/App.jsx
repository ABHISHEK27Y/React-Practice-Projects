import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>  
        <h1>Science </h1>
        <Card subject='chemistry' description="Chemistry is the study of matter, its properties, structure, composition, and the changes it undergoes."/>
        <Card subject='physics' description=' Physics is the study of matter, energy, and the fundamental forces of nature, exploring how they interact and behave.'/>
        <Card description='Mathematics is the abstract study of numbers, shapes, patterns, and structures, focusing on logic and quantitative relationships.'/>
        
   </>
  )
}

export default App
