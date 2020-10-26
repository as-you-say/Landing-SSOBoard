import React from 'react'
import { FaGg } from 'react-icons/fa'
import { 
  ImFacebook,
  ImGoogle,
  ImLinkedin2,
  ImTwitter,

} from 'react-icons/im'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="account">
      <div className="container">
        <h1 className="logo clear">
          <FaGg />
          <span className="text">S. Board</span>
        </h1>
        <form className="form" action="/">
          <input className="id" type="text" placeholder="ID"/>
          <input className="password" type="password" placeholder="Password"/>
          <a href="#" className="forgot">Forgot Password?</a>
          <button className="button">Log In</button>
          <p className="or-with">Or With</p>
          <div className="social">
            <a className="item"><ImGoogle/></a>
            <a className="item"><ImFacebook/></a>
            <a className="item"><ImTwitter/></a>
            <a className="item"><ImLinkedin2/></a>
          </div>
        </form>
        <p className="comment">
          <span>Don't have an account?</span>
          <Link to="/account/signup" className="">Sign Up</Link>
        </p>
      </div>
    </div>
  )
}