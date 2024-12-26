import { useState } from 'react'
import Header from './components/Header/Header'
import Home from './components/home/Home'
import './App.css'
import Footer from './components/Footer/Footer'
// import About from './components/About/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
     
      <Footer/>
    </>
  )
}

export default App
