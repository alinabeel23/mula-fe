import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'
export default function Profile(props) {


    const defaultImg = 'https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/2776e79e778be9646d471a21c7fa4c8e~c5_720x720.jpeg?x-expires=1681380000&x-signature=11zSLchWFjRwMBYD75nvykoX7Dk%3D'
    const [selectedImage, setSelectedImage] = useState(defaultImg);
    const [newUser, setNewUser] = useState({})
    const [errorMsg, setErrorMsg] = useState('')

    const navigate = useNavigate()

    const changeHandler = (e) => {
        const user = {...newUser}
        user[e.target.name] = e.target.value
        setNewUser(user)
        console.log(user);
    }

    const editProfileHandler = () => {
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
   
    const gotoChangePassword = () => {
        navigate('/changepassword')
    }

    console.log('print this now' ,props.user);
    return (
        <div>
            <h2 className='heading'>{props.user.firstName} {props.user.lastName}</h2>
            {selectedImage && (
        <div className='pfp'>
          <img  alt="not found" src={selectedImage === defaultImg ? (selectedImage) : URL.createObjectURL(selectedImage)} />
        <br/>
        <button className='button' onClick={() => setSelectedImage(defaultImg)}>Remove Photo</button>
        </div>
        )}
        <input className='custom-file-input' type="file" name="pfp" onChange={(event) => {
        console.log(event.target.files[0]);
        setSelectedImage(event.target.files[0]);
        }}
      />
            
            
            {/* <h4 className='profile-text'>Edit Profile Photo</h4> */}
            <form className='form' autoComplete='off'>
            <div className='form-item'>
                <input  placeholder={props.user.firstName} type='text' className='auth-form' name='firstName' onChange={changeHandler}></input>
            </div>
            <div className='form-item'>
                <input  placeholder={props.user.lastName} className='auth-form' name='lastName' onChange={changeHandler}></input>
            </div>
            <div className='form-item'>
                <input  placeholder={props.user.email} className='auth-form' name='emailAddress' onChange={changeHandler}></input>
            </div>
            <div className='form-item'>
                <input  placeholder={props.user.phoneNum} className='auth-form' name='phoneNum' onChange={changeHandler}></input>
            </div>
        </form>
        {/* <p  className='errormsg'>{errorMsg}</p> */}
        <Button className='button' variant='priamry' onClick={editProfileHandler}>Edit</Button>
        <ToastContainer />
            <h4 className='profile-text'><a onClick={gotoChangePassword}>Change Password</a></h4>
            <h4 className='profile-text'>Delete Account</h4>
        </div>
    )
}
