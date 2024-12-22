import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username:'hiiii',
    age:21
  }
  return (
    <>
   <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>TailWind</h1>
     {/* <Cards cha='coffe' myArr={myObj}/>  */}
     <Cards username='Vite and React'/>
     <Cards username='JavaScriptcd'/>
    </>
  )
}

export default App
