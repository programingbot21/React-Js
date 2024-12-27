


import './App.css'
import UserContextProvider from './context/UserContextProvide'
import Login from './components/Login'
import Pro from './components/Pro'

function App() {


  return (
    <UserContextProvider>
     <h1>Hi.. react useContext</h1>
     <Login/>
     <Pro/>
    </UserContextProvider>
  )
}

export default App
