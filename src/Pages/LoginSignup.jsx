import React from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
          <div className="loginsignup-fields">
            <input type="text" placeholder='Your Name' />
            <input type="email" placeholder='Email Address' />
            <input type="password" placeholder='Password' />
          </div>
          <button>Continue</button>
          <center><p className='loginsignup-login'>Already have an account 
          <span className="text-red-500 font-semibold cursor-pointer ml-1">Login</span>
          </p>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            I agree to the terms and conditions.
          </div></center>
      </div>
    </div>
  )
}

export default LoginSignup