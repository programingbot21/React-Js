import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './Layout.js';
import About from './components/About/About.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home.js';
import Contact from './components/Contact/Contact';

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
        path: 'contact',
       element: <Contact/>
      }
      
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router = {router}/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
