import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [count, setCount] = useState(10)



let addvalue=()=>{
  if(count<20){
    setCount(count+1)
  }
}
 
let subvalue=()=>{
  if(count>0)
  {
    setCount(count-1)
  }
}

return (
    <>
      <h1>Counter Project</h1>
      <h2>Click on the above to change counter</h2>
      <h3>counter :{count}</h3>
      <button onClick={addvalue}>counter up</button>
      <button onClick={subvalue}>counter down</button>
    </>
  )
}

export default App
