import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './routes/Layout'
import Homepage from './routes/Homepage'
import Bot from './routes/Bot'
import Grader from './routes/Grader'
import Login from './routes/Login'
import Register from './routes/Register'
import Generate from './routes/Generate'


const App = () => {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[{
        path:"/",
        element:<Homepage/>
      },
      {
        path:"/bot",
        element:<Bot/>
      },
      {
        path:"/grader",
        element:<Grader/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/generate",
        element:<Generate/>
      }
    ]
    }
  ])



  return (
    <RouterProvider router={router} />
  )
}

export default App
