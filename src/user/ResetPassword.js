import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default function ResetPassword(props) {

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
            toast.success('Password has been updated!', {
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
    

    const goBack = () => {
        navigate('/login')
    }



  return (
    <div>
        <h2 className='heading'>Reset Password</h2>

        <div className='form'>
            <div className='form-item'>
                <Form.Control className='auth-form' name='emailAddress' placeholder='Your registered email' onChange={changeHandler}></Form.Control>
            </div>
            {/* <div className='form-item'>
                <Form.Control className='auth-form' name='password' type='password' placeholder='New Password' onChange={changeHandler}></Form.Control>
            </div> */}
        </div>
        <p  className='errormsg'>{errorMsg}</p>
        <Button className='button' variant='priamry' onClick={loginHandler}>Send Magic Link</Button>
        <h3 className='under-form margin-bottom2' onClick={goBack}>Remembered your password?<span> Back to login!</span></h3>
        <ToastContainer />



    </div>
  )
}
