import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default function SignIn(props) {

    const navigate = useNavigate()

    const [newUser, setNewUser] = useState({})
    const [errorMsg, setErrorMsg] = useState('')

    const changeHandler = (e) => {
        const user = {...newUser}
        user[e.target.name] = e.target.value
        setNewUser(user)
    }

    const loginHandler = () => {
        if (newUser === {}) {
            setErrorMsg('User does not exist')
        } else {
            toast.success('Time to get that mula!', {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                onClose: () => {
                    props.login(newUser)
                    navigate('/discover') 
                }
            });
        }
    }
    

    const gotoSignup = () => {
        navigate('/signup')
    }

    const gotoChangePassword = () => {
        navigate('/changepassword')
    }
 

  return (
    <div>
        <h2 className='heading'>Sign In</h2>

        <div className='form'>
            <div className='form-item'>
                <Form.Control className='auth-form' name='emailAddress' placeholder='Email Address' onChange={changeHandler}></Form.Control>
            </div>
            <div className='form-item'>
                <Form.Control className='auth-form' name='password' type='password' placeholder='Password' onChange={changeHandler}></Form.Control>
            </div>
        </div>
        <p  className='errormsg'>{errorMsg}</p>
        <Button className='button' variant='priamry' onClick={loginHandler}>Log In</Button>
        <h3 className='under-form' onClick={gotoSignup}>New here?<span> Sign up now!</span></h3>
        <h3 className='under-form margin-bottom2' onClick={(gotoChangePassword)}>Forgot you password?<span> Let's change it!</span></h3>
        <ToastContainer />



    </div>
  )
}
