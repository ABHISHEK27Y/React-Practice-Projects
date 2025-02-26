import { useState, useCallback, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("")
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  
  const passwordRef=useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }


    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])
  

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, );
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-white">
        <h2 className='text-white text-center my-3 text-2xl'>Password generator</h2>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-pink-300 text-black rounded-2xl"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
           onClick={copyPasswordToClipboard}
            className='  text-white px-3 py-0.5  bg-white'
          >copy</button>
        </div>

        <div className="flex itemcenter gap-x-4">
        <div className="flex itemcenter gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
                classname="cursor-pointer"
                onChange={(e)=>{setlength(e.target.value)}}></input>
                <label>Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
      </div>
    

      </div>
    </>
  )
}

export default App


