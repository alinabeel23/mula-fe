import React, { useState, useEffect } from 'react'
import SignUp from './user/SignUp'
import SignIn from './user/SignIn'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Landing } from './Landing'
import Discover from './coins/Discover'
import Coin from './coins/Coin'
import Profile from './user/Profile'
import HomeStore from './stores/HomeStore'

export default function App() {

  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState({})

  const store = HomeStore()

  useEffect(() => {
    let token = localStorage.getItem("token")
    if (token != null) {
      let user = jwt_decode(token)

      if (user) {
        setIsAuth(true)
        setUser(user)
      }
      else if (!user) {
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
        if (token != null) {
          localStorage.setItem('token', token)
          let user = jwt_decode(token)
          setIsAuth(true)
          setUser(user)
          console.log(user.user.name)
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
        <div>
          <div>
            <div className='navbar'>
              &nbsp;
              &nbsp;
              <div className='navbar-left'>
                <Link to="/"><img src='https://svgshare.com/i/rwc.svg' style={{ width: '6rem' }} /></Link> &nbsp;
              </div>
              <div className='navbar-center'>
                <input type="text" value={store.query} onChange={store.setQuery} className='searchbar' placeholder='What crypto are you looking for?' />
              </div>
              <div className='navbar-right'>

                {isAuth ? (
                  <>
                <Link to="/profile">Hello, {user.user.name}!</Link> &nbsp;
                <Link to="/discover">Discover</Link> &nbsp;
                <Link to="/logout" onClick={logoutHandler}>Log Out</Link>
                </>
                ) : (
                <>
                  <Link to="/discover">Discover</Link> &nbsp;
                  <Link to="/signup">Sign Up</Link> &nbsp;
                  <Link to="/signin">Log In</Link> &nbsp;
                </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='line-nav'></div>


        <>
          <Routes>
            <Route path="/" element={<Landing login={loginHandler} />}></Route>
            <Route path="/discover" element={<Discover login={loginHandler} />}></Route>
            <Route path="/profile" element={<Profile login={loginHandler} />}></Route>
            <Route path="/:id" element={<Coin />}></Route>
            <Route path="/signup" element={<SignUp register={registerHandler} />}></Route>
            <Route path="/signin" element={<SignIn login={loginHandler} />}></Route>

          </Routes>
        </>
      </Router>

    </>
  )
}
