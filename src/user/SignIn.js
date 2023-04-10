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

        <Container>
            <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control name='emailAddress' onChange={changeHandler}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type='password' onChange={changeHandler}></Form.Control>
            </Form.Group>
            <Button variant='priamry' onClick={loginHandler}>Log In</Button>
        </Container>

    </div>
  )
}
