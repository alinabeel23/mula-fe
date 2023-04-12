import React, { useState } from 'react'
import {Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default function SignUp(props) {
    

    const navigate = useNavigate()

    const [newUser, setNewUser] = useState({})
    const [errorMsg, setErrorMsg] = useState('')

    const changeHandler = (e) => {
        const user = {...newUser}
        user[e.target.name] = e.target.value
        setNewUser(user)
        console.log(user);
    }

    const registerHandler = () => {
        if (newUser.password !== newUser.confirmPassword) {
            console.log("Passwords don't match")
            setErrorMsg("Passwords don't match!")
            toast.error("Passwords don't match :(" , {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });;
        } else {
        props.register(newUser)
        toast.success('Signed up successfully, yay!', {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            onClose: () => {
                navigate('/discover')
            }
            });
        }
    }

    const gotoLogin = () => {
        navigate('/login')
    }

  return (
    <div>
        <h2 className='heading'>Sign Up</h2>
        <form className='form' autoComplete='off'>
            <div className='form-item'>
                <input  placeholder='First Name' className='auth-form' name='firstName' onChange={changeHandler}></input>
            </div>
            <div className='form-item'>
                <input  placeholder='Last Name' className='auth-form' name='lastName' onChange={changeHandler}></input>
            </div>
            <div className='form-item'>
                <input  placeholder='Email Address' className='auth-form' name='emailAddress' onChange={changeHandler}></input>
            </div>
            <div className='form-item'>
                <input  placeholder='Phone Number' className='auth-form' name='phoneNum' onChange={changeHandler}></input>
            </div>
            <div className='form-item'>
                <input  placeholder='Password' className='auth-form' name='password' type='password' onChange={changeHandler}></input>
            </div>
            <div className='form-item'>
                <input  placeholder='Confirm Password' className='auth-form' name='confirmPassword' type='password' onChange={changeHandler}></input>
            </div>
        </form>
        <Button className='button' variant='priamry' onClick={registerHandler}>Register</Button>
        <h3 className='under-form margin-bottom' onClick={gotoLogin}>Already got an account? <span>Log in!</span></h3>
        <ToastContainer />



    </div>
  )
}
