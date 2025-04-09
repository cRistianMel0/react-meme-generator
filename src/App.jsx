import { useState } from 'react'
import Content from './components/Content'
import Header from './components/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Content></Content>
    </>
  )
} 

export default App
