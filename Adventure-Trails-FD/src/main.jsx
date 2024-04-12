import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/home.jsx'
import Trilhas from './pages/trilhas/trilhas.jsx'
import Cadastro from './pages/cadastro/cadastro.jsx'


const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/cadastro",
        element: <Cadastro />
      },
      {
        path: "/trilhas",
        element: <Trilhas />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routers}>
  </RouterProvider>
)
