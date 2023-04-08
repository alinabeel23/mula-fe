import React, { useState } from 'react'
import {Container, Form, Button} from 'react-bootstrap'

export default function SignIn(props) {

    const [newUser, setNewUser] = useState({})

    const changeHandler = (e) => {
        const user = {...newUser}
        user[e.target.name] = e.target.value
        setNewUser(user)
        console.log(user);
    }

    const loginHandler = () => {
        props.login(newUser)
    }

  return (
    <div>
        <h1>Sign In</h1>

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
