import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { ReactDom } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github from './components/github/Github'




const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'contact-us',
        element: <Contact/>
      },
      {
        path: 'user/:userid',
        element: <User/>
      },
      {
        path: 'github',
        element: <Github/>
      }
     
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
