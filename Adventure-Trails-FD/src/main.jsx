import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const routers = createBrowserRouter([
  {
    path:"/",
    element:
  },
  {
    path:"/cadastro",
    element:
  },
  {
    path:"/lista",
    element:
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routers}>
  </RouterProvider>
)
