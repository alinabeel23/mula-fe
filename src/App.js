import React, { useState, useEffect } from 'react'
import SignUp from './user/SignUp'
import SignIn from './user/SignIn'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Landing } from './Landing'
import Discover from './coins/Discover'
import Coin from './coins/Coin'

export default function App() {

  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState({})

  useEffect(() => {
    let token = localStorage.getItem("token")
    if(token != null){
      let user = jwt_decode(token)

      if(user){
        setIsAuth(true)
        setUser(user)
      }
      else if (!user){
        localStorage.removeItem("token")
        setIsAuth(false)
      }
    }

  }, [])
  

  const registerHandler = (user) => {
    Axios.post('auth/signup', user)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }

  const loginHandler = (cred) => {
    Axios.post('auth/signin', cred)
    .then(res => {
      console.log(res.data.token);
      // save token into local storage
      let token = res.data.token
      if(token != null){
        localStorage.setItem('token', token)
        let user = jwt_decode(token)
        setIsAuth(true)
        setUser(user)
      }
    })
    .catch(err => {
      console.log(err);
      setIsAuth(false)
    })
  }

  const logoutHandler = (e) => {
    e.preventDefault()
    localStorage.removeItem("token")
    setIsAuth(false)
    setUser(null)
  }

  return (
    <>
      <Router>
        <>
          <>
            <>
              &nbsp;
              &nbsp;
              <Link to="/">Home</Link> &nbsp;
              <Link to="/discover">Discover</Link> &nbsp;
              <Link to="/">Profile</Link> &nbsp;
              <Link to="/signup">Sign Up</Link> &nbsp;
              <Link to="/signin">Log In</Link> &nbsp;
              <Link to="/logout" onClick={logoutHandler}>Log Out</Link> &nbsp;
            </>
          </>
        </>

        <>
          <Routes>
            <Route path="/" element={<Landing login={loginHandler} />}></Route>
            <Route path="/discover" element={<Discover login={loginHandler} />}></Route>
            <Route path="/:id" element={<Coin />}></Route>
            <Route path="/signup" element={<SignUp register={registerHandler} />}></Route>
            <Route path="/signin" element={<SignIn login={loginHandler} />}></Route>
            
          </Routes>
        </>
      </Router>
    </>
  )
}
 