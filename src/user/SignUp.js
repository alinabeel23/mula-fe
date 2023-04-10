import React, { useState } from 'react'
import {Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function SignUp(props) {

    const navigate = useNavigate()

    const [newUser, setNewUser] = useState({})

    const changeHandler = (e) => {
        const user = {...newUser}
        user[e.target.name] = e.target.value
        setNewUser(user)
        console.log(user);
    }

    const registerHandler = () => {
        props.register(newUser)
        navigate('/discover')
    }

  return (
    <div>
        <h2 className='heading'>Sign Up</h2>
        <div className='form'>
            <div className='form-item'>
                {/* <Form.Label >First Name</Form.Label> */}
                <input autocomplete="off" placeholder='First Name' className='auth-form' name='firstName' onChange={changeHandler}></input>
            </div>
            <div className='form-item'>
                {/* <Form.Label>Last Name</Form.Label> */}
                <input autocomplete="off" placeholder='Last Name' className='auth-form' name='lastName' onChange={changeHandler}></input>
            </div>
            <div className='form-item'>
                {/* <Form.Label>Email Address</Form.Label> */}
                <input autocomplete="off" placeholder='Email Address' className='auth-form' name='emailAddress' onChange={changeHandler}></input>
            </div>
            <div className='form-item'>
                {/* <Form.Label>Email Address</Form.Label> */}
                <input autocomplete="off" placeholder='Phone Number' className='auth-form' name='phoneNum' onChange={changeHandler}></input>
            </div>
            <div className='form-item'>
                {/* <Form.Label>Password</Form.Label> */}
                <input autocomplete="off" placeholder='Password' className='auth-form' name='password' type='password' onChange={changeHandler}></input>
            </div>
            <div className='form-item'>
                {/* <Form.Label>Password</Form.Label> */}
                <input autocomplete="off" placeholder='Confirm Password' className='auth-form' name='password' type='password' onChange={changeHandler}></input>
            </div>
        </div>
        <Button className='button' variant='priamry' onClick={registerHandler}>Register</Button>


    </div>
  )
}
