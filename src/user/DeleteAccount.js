import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Axios from 'axios';

export default function DeleteAccount(props) {

    const navigate = useNavigate()

    const [newUser, setNewUser] = useState({})
    const [errorMsg, setErrorMsg] = useState('')

    console.log(newUser);

    const changeHandler = (e) => {
        const user = {...newUser}
        user[e.target.name] = e.target.value
        setNewUser(user)
    }
    
    
    const userId = props.user.id

    const deleteUser = () => {
        Axios.delete(`profile/delete?id=${userId}`, 
        {
            headers: {
                "Authorization" : "Bearer" + localStorage.getItem("token")
            }
        })
        .then(res => {
            console.log("record delete")
            console.log(res)
            toast.success('Your account has been deleted :(', {
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
            
        })
        .catch(err => {
            console.log(err);
        })
    }

    const goBack = () => {
        navigate('/profile')
    }



  return (
    <div>
        <h2 className='heading'>Delete Account</h2>
        <h3 className='subheading2'>Are you sure about this?</h3>
        <h3 className='subheading2'>There is no going back.</h3>

        <div className='form'>
            <div className='form-item'>
                <Form.Control className='auth-form' name='password' placeholder='Password' onChange={changeHandler}></Form.Control>
            </div>

        </div>
        <p  className='errormsg'>{errorMsg}</p>
        <Button className='button' variant='priamry' onClick={deleteUser}>DELETE :(</Button>
        <h3 className='under-form margin-bottom2' onClick={goBack}>Noooo,<span> Back to my profile!</span></h3>
        <ToastContainer />



    </div>
  )
}
