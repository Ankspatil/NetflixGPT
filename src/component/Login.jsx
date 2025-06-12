import React, { useState } from 'react'
import Header from './Header'
import { useSearchParams } from 'react-router'

const Login = () => {


    const[issignup , setSingup] = useState(true)

function signup(){
setSingup(!issignup)

}


  return (
    <div>
 <Header />
<div className="absolute top-0 left-0 w-full h-full -z-10">
  <img
    src="https://assets.nflxext.com/ffe/siteui/vlv3/6863f6e8-d419-414d-b5b9-7ef657e67ce4/web/IN-en-20250602-TRIFECTA-perspective_27a3fdfa-126f-4148-b153-55d60b51be6a_large.jpg"
    alt="Netflix background"
    className="w-full h-full object-cover"
  />
</div>

<form className="w-full max-w-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 bg-black rounded-lg shadow-lg text-white bg-opacity-80">
  <h1 className="font-bold text-3xl py-4 text-center"> {issignup ? "Sign In" : "Sign up" } </h1>

  {!issignup
  && ( <input
    type="text"
    placeholder="Enter Your Name"
    className="w-full p-3 m-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
  />)}

  <input
    type="text"
    placeholder="Email Address"
    className="w-full p-3 m-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
  />

  <input
    type="password"
    placeholder="Password"
    className="w-full p-3 m-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
  />

  <button className="py-3 px-4 m-2 bg-red-700 w-full rounded-md hover:bg-red-800 transition duration-300">
 { issignup ? "Sign In" : "Sign up"}
  </button>

 <span className="text-white hover:underline cursor-pointer" onClick={signup}>{issignup ? "New To Netflix Sign Up Now" : "Already Register ? Sign In Now"}</span>
</form>




    </div>

  )
}

export default Login