import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const anotherElement=(
  <a href="https://google.com" target='_blank'>visit google</a>
)

const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click to load google page',
  anotherElement
)



const root=createRoot(document.getElementById('root'))
root.render(
  reactElement
  )
