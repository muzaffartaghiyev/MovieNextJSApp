"use client"

import { useAuthContext } from '@/context/AuthContext'
import React, { useContext, useState } from 'react'


const Register = () => {

    const {createUser} = useAuthContext()

    const [signup,setSignup] = useState(
        {
            firsName:"",
            lastName:"",
            email:"",
            password:""
        }
    )

    const fillState=(e)=>{
        setSignup({...signup,[e.target.name]:e.target.value})
    }

    const send=(e)=>{
        e.preventDefault()

        const displayName=`${signup.firstName} ${signup.lastName}`

        createUser(signup.email,signup.password,displayName)
    }
  return (
      <div className="relative h-screen w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center relative top-28 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <form onSubmit={send}>
              <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
                Sign Up
              </h2>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  name="firstName"
                  className="peer"
                  type="text"
                  required
                  placeholder=" "
                  onChange={fillState}
                />
                <label htmlFor="floating_text">First Name</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  name="lastName"
                  className="peer"
                  type="text"
                  required
                  placeholder=" "
                  onChange={fillState}
                />
                <label htmlFor="floating_text">Last Name</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  name="email"
                  className="peer"
                  type="email"
                  placeholder=" "
                  required
                  onChange={fillState}
                />
                <label htmlFor="floating_email">Email</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  name="password"
                  className="peer"
                  type="password"
                  placeholder=" "
                  required
                  onChange={fillState}
                />
                <label htmlFor="floating_password">Password</label>
              </div>
              <button className="btn-danger" type="submit">
                Register
              </button>
              <button
                className="flex justify-between text-center items-center btn-danger"
                type="button"
             
              >
                Continue with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
