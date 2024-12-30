import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './Layout'
import About from './components/About/About'
// import DataFecthCom from './DataFecthCom'
// import App from './App.jsx'
 
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
       
      {
         path: 'about',
         element:<About/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
