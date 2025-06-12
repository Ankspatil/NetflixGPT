import React from 'react'
import Login from './Login'
import Brouse from './Brouse'
import { createBrowserRouter  , RouterProvider} from 'react-router'

export const Body = () => {

const appRouter = createBrowserRouter([
{
path: "/",
element: <Login />
},
{
    path: "/browse",
    element: <Brouse />
},
])


  return (
    <div>
       <RouterProvider  router={appRouter}/>
    </div>
  )
}
