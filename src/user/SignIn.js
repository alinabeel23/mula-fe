import React, { useState } from 'react'
import {Container, Form, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function SignIn(props) {

    const navigate = useNavigate()

    const [newUser, setNewUser] = useState({})

    const changeHandler = (e) => {
        const user = {...newUser}
        user[e.target.name] = e.target.value
        setNewUser(user)
    }

    const loginHandler = () => {
        props.login(newUser)
        navigate('/discover') 

    }

  return (
    <div>
        <h2 className='heading'>Sign In</h2>

        <div className='form'>
            <div className='form-item'>
                {/* <Form.Label>Email Address</Form.Label> */}
                <Form.Control className='auth-form' name='emailAddress' placeholder='Email Address' onChange={changeHandler}></Form.Control>
            </div>
            <div className='form-item'>
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control className='auth-form' name='password' type='password' placeholder='Password' onChange={changeHandler}></Form.Control>
            </div>
        </div>
        <Button className='button' variant='priamry' onClick={loginHandler}>Log In</Button>


    </div>
  )
}
